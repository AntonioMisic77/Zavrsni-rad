using System.Text.Json.Serialization;
using Backend.Models;
using Backend.Services.Statistics.StatisticL;
using Backend.Services.Statistics.StatisticM;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


var DB_HOST = builder.Configuration["DB_HOST"];
var DB_PORT = builder.Configuration["DB_PORT"];
var DB_USER = builder.Configuration["DB_USER"];
var DB_PASSWORD = builder.Configuration["DB_PASSWORD"];
var DB_NAME = builder.Configuration["DB_NAME"];

var connectionString = $"Host={DB_HOST};Port={DB_PORT};Database={DB_NAME};Username={DB_USER};Password={DB_PASSWORD}";

if (connectionString == null)
{
    connectionString = builder.Configuration.GetConnectionString("DbConnectionString");
}
// Add services to the container.
builder.Services.AddDbContext<MetalsDbContext>(options =>
{
    options.UseNpgsql(connectionString);
});

builder.Services.AddControllers().AddJsonOptions( 
        x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles
    );

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", b => b.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());
});

builder.Services.AddTransient<IStatisticMService,StatisticMService>();
builder.Services.AddTransient<IStatisticLService, StatisticLService>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHealthChecks();
var app = builder.Build();

app.MapHealthChecks("/health");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
