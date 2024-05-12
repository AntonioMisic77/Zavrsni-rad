#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /source
Copy . .
RUN dotnet restore "./Backend.csproj" --disable-parallel
RUN dotnet build "./Backend.csproj" -c release -o /app --no-restore

From mcr.microsoft.com/dotnet/aspnet:6.0-focal
WORKDIR /app
COPY --from=build /app .
EXPOSE 5000

ENTRYPOINT ["dotnet", "Backend.dll"]