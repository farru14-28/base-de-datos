package com.logisticworld.api;
import jakarta.ws.rs.GET;import jakarta.ws.rs.Path;import jakarta.ws.rs.Produces;import jakarta.ws.rs.core.MediaType;import java.util.Map;
@Path("/api") @Produces(MediaType.APPLICATION_JSON)
public class HealthResource {@GET @Path("/health") public Map<String,String> health(){return Map.of("app","Logistic World","status","ok");}}
