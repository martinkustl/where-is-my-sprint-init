package com.martin.dto

data class AppProductionPhaseDto(
    val type: AppProductionPhaseType,
    val status: AppStatusEnum,
    val releaseDate: String,
    val delayedReleaseDate: String? = null,
) : AppPhase()
