package com.martin.services

import com.martin.dto.AppOrdinaryPhaseDto
import com.martin.dto.AppOrdinaryPhaseType
import com.martin.dto.AppPhases
import com.martin.dto.AppProductionPhaseDto
import com.martin.dto.AppProductionPhaseType
import com.martin.dto.AppStatusEnum
import com.martin.dto.AppVersionDto
import com.martin.dto.NewAppVersionDto
import jakarta.enterprise.context.ApplicationScoped

val appVersions = mutableListOf(
    AppVersionDto(
        id = 1,
        version = "v2.1.0",
        phases = AppPhases(
            delivery1 = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.DELIVERY_1, status = AppStatusEnum.COMPLETED, startDate = "2025-10-01", endDate = "2025-10-15"),
            delivery2 = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.DELIVERY_2, status = AppStatusEnum.COMPLETED, startDate = "2025-10-16", endDate = "2025-10-30"),
            testing = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.TESTING, status = AppStatusEnum.COMPLETED, startDate = "2025-11-01", endDate = "2025-11-15"),
            userTesting = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.USER_TESTING, status = AppStatusEnum.COMPLETED, startDate = "2025-11-16", endDate = "2025-11-30"),
            production = AppProductionPhaseDto(type = AppProductionPhaseType.PRODUCTION, status = AppStatusEnum.COMPLETED, releaseDate = "2025-12-01")
        )
    ),
    AppVersionDto(
        id = 2,
        version = "v2.2.0",
        phases = AppPhases(
            delivery1 = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.DELIVERY_1, status = AppStatusEnum.COMPLETED, startDate = "2025-11-01", endDate = "2025-11-15"),
            delivery2 = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.DELIVERY_2, status = AppStatusEnum.COMPLETED, startDate = "2025-11-16", endDate = "2025-11-30"),
            testing = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.TESTING, status = AppStatusEnum.COMPLETED, startDate = "2025-12-01", endDate = "2025-12-15"),
            userTesting = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.USER_TESTING, status = AppStatusEnum.DELAYED, startDate = "2025-12-16", endDate = "2025-12-30", causesProductionDelay = true),
            production = AppProductionPhaseDto(type = AppProductionPhaseType.PRODUCTION, status = AppStatusEnum.DELAYED, releaseDate = "2026-01-01", delayedReleaseDate = "2026-02-28")
        )
    ),
    AppVersionDto(
        id = 3,
        version = "v2.3.0",
        phases = AppPhases(
            delivery1 = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.DELIVERY_1, status = AppStatusEnum.COMPLETED, startDate = "2025-12-01", endDate = "2025-12-15"),
            delivery2 = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.DELIVERY_2, status = AppStatusEnum.COMPLETED, startDate = "2025-12-16", endDate = "2025-12-30"),
            testing = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.TESTING, status = AppStatusEnum.IN_PROGRESS, startDate = "2026-01-01", endDate = "2026-01-15"),
            userTesting = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.USER_TESTING, status = AppStatusEnum.NOT_STARTED, startDate = "2026-01-16", endDate = "2026-01-30"),
            production = AppProductionPhaseDto(type = AppProductionPhaseType.PRODUCTION, status = AppStatusEnum.NOT_STARTED, releaseDate = "2026-02-01")
        )
    ),
    AppVersionDto(
        id = 4,
        version = "v2.4.0",
        phases = AppPhases(
            delivery1 = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.DELIVERY_1, status = AppStatusEnum.COMPLETED, startDate = "2026-01-01", endDate = "2026-01-15"),
            delivery2 = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.DELIVERY_2, status = AppStatusEnum.IN_PROGRESS, startDate = "2026-01-16", endDate = "2026-01-30"),
            testing = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.TESTING, status = AppStatusEnum.NOT_STARTED, startDate = "2026-02-01", endDate = "2026-02-14"),
            userTesting = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.USER_TESTING, status = AppStatusEnum.NOT_STARTED, startDate = "2026-02-15", endDate = "2026-02-28"),
            production = AppProductionPhaseDto(type = AppProductionPhaseType.PRODUCTION, status = AppStatusEnum.NOT_STARTED, releaseDate = "2026-03-01")
        )
    ),
    AppVersionDto(
        id = 5,
        version = "v2.5.0",
        phases = AppPhases(
            delivery1 = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.DELIVERY_1, status = AppStatusEnum.NOT_STARTED, startDate = "2026-02-01", endDate = "2026-02-15"),
            delivery2 = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.DELIVERY_2, status = AppStatusEnum.NOT_STARTED, startDate = "2026-02-16", endDate = "2026-03-01"),
            testing = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.TESTING, status = AppStatusEnum.NOT_STARTED, startDate = "2026-03-02", endDate = "2026-03-15"),
            userTesting = AppOrdinaryPhaseDto(type = AppOrdinaryPhaseType.USER_TESTING, status = AppStatusEnum.NOT_STARTED, startDate = "2026-03-16", endDate = "2026-03-29"),
            production = AppProductionPhaseDto(type = AppProductionPhaseType.PRODUCTION, status = AppStatusEnum.NOT_STARTED, releaseDate = "2026-04-01")
        )
    )
)

@ApplicationScoped
class AppVersionsService {
    fun getAppVersions(): List<AppVersionDto> {
        return appVersions
    }

    fun getAppVersionById(id: Int): AppVersionDto? {
        return appVersions.find { it.id == id }
    }

    fun createAppVersion(appVersion: NewAppVersionDto): AppVersionDto? {
        val newId = (appVersions.maxOfOrNull { it.id } ?: 0) + 1
        appVersions.add(
            AppVersionDto(
                id = newId,
                version = appVersion.version,
                phases = appVersion.phases
            )
        )
        return getAppVersionById(newId)
    }

    fun updateAppVersion(id: Int, updatedAppVersion: NewAppVersionDto): AppVersionDto? {
        val index = appVersions.indexOfFirst { it.id == id }
        if (index != -1) {
            appVersions[index] = AppVersionDto(
                id = id,
                version = updatedAppVersion.version,
                phases = updatedAppVersion.phases
            )
            return appVersions[index]
        }
        return null
    }
}