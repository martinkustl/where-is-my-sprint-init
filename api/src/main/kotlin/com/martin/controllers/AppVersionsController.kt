package com.martin.controllers

import com.martin.dto.AppVersionDto
import com.martin.dto.NewAppVersionDto
import com.martin.services.AppVersionsService
import jakarta.inject.Inject
import jakarta.ws.rs.GET
import jakarta.ws.rs.POST
import jakarta.ws.rs.PUT
import jakarta.ws.rs.Path
import jakarta.ws.rs.Produces
import jakarta.ws.rs.WebApplicationException

@Path("/v1/app-versions")
class AppVersionsController {
    @Inject
    lateinit var appVersionsService: AppVersionsService

    @GET
    @Produces("application/json")
    fun getAppVersions(): List<AppVersionDto> {
        return appVersionsService.getAppVersions()
    }

    @GET
    @Path("/{id}")
    @Produces("application/json")
    fun getAppVersionById(id: Int): AppVersionDto {
        return appVersionsService.getAppVersionById(id) ?: throw WebApplicationException("App version not found", 404)
    }

    @POST
    @Produces("application/json")
    fun createAppVersion(newAppVersion: NewAppVersionDto): AppVersionDto {
        val newAppVersion = appVersionsService.createAppVersion(newAppVersion)

        return newAppVersion ?: throw WebApplicationException("App version could not be created", 400)
    }

    @PUT
    @Path("/{id}")
    @Produces("application/json")
    fun updateAppVersion(id: Int, updatedAppVersion: NewAppVersionDto): AppVersionDto {
        val updatedVersion = appVersionsService.updateAppVersion(id, updatedAppVersion)

        return updatedVersion ?: throw WebApplicationException("App version not found or could not be updated", 404)
    }
}
