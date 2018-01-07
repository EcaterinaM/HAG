using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace HagDataLayer.Migrations
{
    public partial class updatedlevelentity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "QuestionsQuestionId",
                table: "Levels",
                nullable: true);

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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Levels_Questions_QuestionsQuestionId",
                table: "Levels");

            migrationBuilder.DropIndex(
                name: "IX_Levels_QuestionsQuestionId",
                table: "Levels");

            migrationBuilder.DropColumn(
                name: "QuestionsQuestionId",
                table: "Levels");
        }
    }
}
