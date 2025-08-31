package com.martin.dto

data class AppVersionDto(
    val id: Int,
    val version: String,
    // type has to be exact type as in the OpenAPI spec
    // So it has to have same properties and types
    val phases: AppPhases,
)


//        phases:
//          type: object
//          properties:
//            delivery1:
//              $ref: "#/components/schemas/OrdinaryAppPhase"
//            delivery2:
//              $ref: "#/components/schemas/OrdinaryAppPhase"
//            testing:
//              $ref: "#/components/schemas/OrdinaryAppPhase"
//            userTesting:
//              $ref: "#/components/schemas/OrdinaryAppPhase"
//            production:
//              $ref: "#/components/schemas/ProductionAppPhase"