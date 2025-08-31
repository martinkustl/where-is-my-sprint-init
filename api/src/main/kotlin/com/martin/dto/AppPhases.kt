package com.martin.dto

data class AppPhases(
    val delivery1: AppOrdinaryPhaseDto,
    val delivery2: AppOrdinaryPhaseDto,
    val testing: AppOrdinaryPhaseDto,
    val userTesting: AppOrdinaryPhaseDto,
    val production: AppProductionPhaseDto
)