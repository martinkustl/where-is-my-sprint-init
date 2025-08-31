package com.martin.dto

data class AppOrdinaryPhaseDto(
    val type: AppOrdinaryPhaseType,
    val status: AppStatusEnum,
    val startDate: String,
    val endDate: String,
    val causesProductionDelay: Boolean? = false,
): AppPhase()
