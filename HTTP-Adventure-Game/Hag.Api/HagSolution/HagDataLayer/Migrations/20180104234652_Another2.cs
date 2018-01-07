using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace HagDataLayer.Migrations
{
    public partial class Another2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Levels_Questions_QuestionsQuestionId",
                table: "Levels");

            migrationBuilder.DropForeignKey(
                name: "FK_Planets_Questions_QuestionsQuestionId",
                table: "Planets");

            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Levels_LevelsLevelId",
                table: "Questions");

            migrationBuilder.DropIndex(
                name: "IX_Planets_QuestionsQuestionId",
                table: "Planets");

            migrationBuilder.DropIndex(
                name: "IX_Levels_QuestionsQuestionId",
                table: "Levels");

            migrationBuilder.DropColumn(
                name: "QuestionsQuestionId",
                table: "Planets");

            migrationBuilder.DropColumn(
                name: "QuestionsQuestionId",
                table: "Levels");

            migrationBuilder.RenameColumn(
                name: "LevelsLevelId",
                table: "Questions",
                newName: "PlanetId");

            migrationBuilder.RenameIndex(
                name: "IX_Questions_LevelsLevelId",
                table: "Questions",
                newName: "IX_Questions_PlanetId");

            migrationBuilder.AddColumn<Guid>(
                name: "LevelId",
                table: "Questions",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Questions_LevelId",
                table: "Questions",
                column: "LevelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Levels_LevelId",
                table: "Questions",
                column: "LevelId",
                principalTable: "Levels",
                principalColumn: "LevelId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Planets_PlanetId",
                table: "Questions",
                column: "PlanetId",
                principalTable: "Planets",
                principalColumn: "PlanetId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Levels_LevelId",
                table: "Questions");

            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Planets_PlanetId",
                table: "Questions");

            migrationBuilder.DropIndex(
                name: "IX_Questions_LevelId",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "LevelId",
                table: "Questions");

            migrationBuilder.RenameColumn(
                name: "PlanetId",
                table: "Questions",
                newName: "LevelsLevelId");

            migrationBuilder.RenameIndex(
                name: "IX_Questions_PlanetId",
                table: "Questions",
                newName: "IX_Questions_LevelsLevelId");

            migrationBuilder.AddColumn<Guid>(
                name: "QuestionsQuestionId",
                table: "Planets",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "QuestionsQuestionId",
                table: "Levels",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Planets_QuestionsQuestionId",
                table: "Planets",
                column: "QuestionsQuestionId");

            migrationBuilder.CreateIndex(
                name: "IX_Levels_QuestionsQuestionId",
                table: "Levels",
                column: "QuestionsQuestionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Levels_Questions_QuestionsQuestionId",
                table: "Levels",
                column: "QuestionsQuestionId",
                principalTable: "Questions",
                principalColumn: "QuestionId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Planets_Questions_QuestionsQuestionId",
                table: "Planets",
                column: "QuestionsQuestionId",
                principalTable: "Questions",
                principalColumn: "QuestionId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Levels_LevelsLevelId",
                table: "Questions",
                column: "LevelsLevelId",
                principalTable: "Levels",
                principalColumn: "LevelId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
