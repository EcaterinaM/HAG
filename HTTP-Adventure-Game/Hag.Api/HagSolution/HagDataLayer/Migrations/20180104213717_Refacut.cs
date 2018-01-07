using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace HagDataLayer.Migrations
{
    public partial class Refacut : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Levels_LevelsLevelId",
                table: "Questions");

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

            migrationBuilder.AddColumn<Guid>(
                name: "LevelId",
                table: "Planets",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "PlanetsPlanetId",
                table: "Levels",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Questions_LevelId",
                table: "Questions",
                column: "LevelId");

            migrationBuilder.CreateIndex(
                name: "IX_Planets_LevelId",
                table: "Planets",
                column: "LevelId");

            migrationBuilder.CreateIndex(
                name: "IX_Levels_PlanetsPlanetId",
                table: "Levels",
                column: "PlanetsPlanetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Levels_Planets_PlanetsPlanetId",
                table: "Levels",
                column: "PlanetsPlanetId",
                principalTable: "Planets",
                principalColumn: "PlanetId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Planets_Levels_LevelId",
                table: "Planets",
                column: "LevelId",
                principalTable: "Levels",
                principalColumn: "LevelId",
                onDelete: ReferentialAction.Restrict);

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
                name: "FK_Levels_Planets_PlanetsPlanetId",
                table: "Levels");

            migrationBuilder.DropForeignKey(
                name: "FK_Planets_Levels_LevelId",
                table: "Planets");

            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Levels_LevelId",
                table: "Questions");

            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Planets_PlanetId",
                table: "Questions");

            migrationBuilder.DropIndex(
                name: "IX_Questions_LevelId",
                table: "Questions");

            migrationBuilder.DropIndex(
                name: "IX_Planets_LevelId",
                table: "Planets");

            migrationBuilder.DropIndex(
                name: "IX_Levels_PlanetsPlanetId",
                table: "Levels");

            migrationBuilder.DropColumn(
                name: "LevelId",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "LevelId",
                table: "Planets");

            migrationBuilder.DropColumn(
                name: "PlanetsPlanetId",
                table: "Levels");

            migrationBuilder.RenameColumn(
                name: "PlanetId",
                table: "Questions",
                newName: "LevelsLevelId");

            migrationBuilder.RenameIndex(
                name: "IX_Questions_PlanetId",
                table: "Questions",
                newName: "IX_Questions_LevelsLevelId");

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
