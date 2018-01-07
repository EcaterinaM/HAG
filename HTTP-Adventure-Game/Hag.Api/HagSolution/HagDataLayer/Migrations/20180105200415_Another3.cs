using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace HagDataLayer.Migrations
{
    public partial class Another3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Planets_PlanetId",
                table: "Questions");

            migrationBuilder.DropIndex(
                name: "IX_Questions_PlanetId",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "PlanetId",
                table: "Questions");

            migrationBuilder.AddColumn<Guid>(
                name: "QuestionsQuestionId",
                table: "Planets",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Planets_QuestionsQuestionId",
                table: "Planets",
                column: "QuestionsQuestionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Planets_Questions_QuestionsQuestionId",
                table: "Planets",
                column: "QuestionsQuestionId",
                principalTable: "Questions",
                principalColumn: "QuestionId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Planets_Questions_QuestionsQuestionId",
                table: "Planets");

            migrationBuilder.DropIndex(
                name: "IX_Planets_QuestionsQuestionId",
                table: "Planets");

            migrationBuilder.DropColumn(
                name: "QuestionsQuestionId",
                table: "Planets");

            migrationBuilder.AddColumn<Guid>(
                name: "PlanetId",
                table: "Questions",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Questions_PlanetId",
                table: "Questions",
                column: "PlanetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Planets_PlanetId",
                table: "Questions",
                column: "PlanetId",
                principalTable: "Planets",
                principalColumn: "PlanetId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
