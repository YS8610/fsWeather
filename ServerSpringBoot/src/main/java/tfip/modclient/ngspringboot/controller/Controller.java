package tfip.modclient.ngspringboot.controller;

import com.google.gson.Gson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tfip.modclient.ngspringboot.model.Weather;
import tfip.modclient.ngspringboot.service.WeatherService;

@RestController
@RequestMapping(path= "/api/weather", produces = MediaType.APPLICATION_JSON_VALUE) //MediaType.APPLICATION_JSON_VALUE
public class Controller {
    
    @Autowired
    WeatherService weatherSvc;
    
    
    // @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE )
    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @RequestMapping(path= "", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE, method = RequestMethod.POST)
    // public ResponseEntity<String> registerUser(@RequestBody MultiValueMap<String, String> form ){

    //     String weatherJsonString="";
    //     HttpHeaders httpHeaders = new HttpHeaders();
    //     httpHeaders.add("Content-Type", MediaType.APPLICATION_JSON_VALUE);

    //     String cityparsed = form.getFirst("city");
    //     Gson gson = new Gson();

    //     try {
    //         Weather weatherCity = weatherSvc.getWeather(cityparsed);
    //         weatherJsonString = gson.toJson(weatherCity).toString();

    //     } catch (Exception e) {
    //         Weather weatherError = new Weather("","","","","");
    //         weatherJsonString = gson.toJson(weatherError).toString();
    //         return new ResponseEntity<String>(weatherJsonString, httpHeaders, HttpStatus.BAD_REQUEST );
    //     }
    //     return new ResponseEntity<String>(weatherJsonString, httpHeaders, HttpStatus.OK );
    // }
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping()
    public ResponseEntity<String> registerUser(@RequestParam("city") String city  ){

        String weatherJsonString="";
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Content-Type", MediaType.APPLICATION_JSON_VALUE);

        Gson gson = new Gson();

        try {
            Weather weatherCity = weatherSvc.getWeather(city);
            weatherJsonString = gson.toJson(weatherCity).toString();

        } catch (Exception e) {
            Weather weatherError = new Weather("","","","","");
            weatherJsonString = gson.toJson(weatherError).toString();
            return new ResponseEntity<String>(weatherJsonString, httpHeaders, HttpStatus.BAD_REQUEST );
        }
        return new ResponseEntity<String>(weatherJsonString, httpHeaders, HttpStatus.OK );
    }
}
