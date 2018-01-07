using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace HagDataLayer.Migrations
{
    public partial class Another4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FirstWrongAnswer",
                table: "Questions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecondWrongAnswer",
                table: "Questions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ThirdWrongAnswer",
                table: "Questions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstWrongAnswer",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "SecondWrongAnswer",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "ThirdWrongAnswer",
                table: "Questions");
        }
    }
}
