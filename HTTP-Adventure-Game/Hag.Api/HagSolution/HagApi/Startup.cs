using System;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using HagBusinessLayer.ImplementRepository;
using HagBusinessLayer.InterfaceRepository;
using HagDataLayer.Context;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace HagApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DatabaseContext>(
                options => options.UseSqlServer(Configuration.GetConnectionString("AppConnection")));

            services.AddTransient<IDatabaseContext, DatabaseContext>();
            services.AddTransient<ILevelRepository, LevelRepository>();
            services.AddTransient<IPlanetRepository, PlanetRepository>();
            services.AddTransient<IQuestionRepository, QuestionRepository>();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAnyOrigin",
                    b => b
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "FamilyKit.Api", Version = "v1" });
            });


            services.AddMvc();
            var builder = new ContainerBuilder();
            ////services.AddSingleton(new AutoMapperConfig(builder));
            ////builder.RegisterModule<CqrsAutofac>();
            ////builder.RegisterModule<AutofacModule>();
            builder.Populate(services);
            var container = builder.Build();

            return container.Resolve<IServiceProvider>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("AllowAnyOrigin");

            app.UseMvc();

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
            });

        }
    }
}
