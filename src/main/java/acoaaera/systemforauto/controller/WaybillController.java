package acoaaera.systemforauto.controller;

import acoaaera.systemforauto.exceptions.NotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("waybill")
public class WaybillController {

    private int counter = 4;

    private List<Map<String, String>> waybills = new ArrayList<>() {{
        add(new HashMap<>() {{
            put("id", "1");
            put("auto", "Mers");
        }});
        add(new HashMap<>() {{
            put("id", "2");
            put("auto", "BMW");
        }});
        add(new HashMap<>() {{
            put("id", "3");
            put("auto", "Lada");
        }});
    }};

    @GetMapping
    public List<Map<String, String>> list() {
        return waybills;
    }

    @GetMapping("{id}")
    public Map<String, String> getOne(@PathVariable String id) {
        return getWaybill(id);
    }

    @PostMapping
    public Map<String,String> create(@RequestBody Map<String,String> waybill){
        waybill.put("id", String.valueOf(counter++));
        waybills.add(waybill);
        return waybill;
    }

    @PutMapping("{id}")
    public Map<String,String> update(@PathVariable String id, @RequestBody Map<String,String> message){
        Map<String, String> waybillFromDb = getWaybill(id);

        waybillFromDb.putAll(message);
        waybillFromDb.put("id",id);

        return waybillFromDb;
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable String id){
         Map<String,String> waybill = getWaybill(id);

         waybills.remove(waybill);
    }


    private Map<String, String> getWaybill(@PathVariable String id) {
        return waybills.stream().filter(waybill -> waybill.get("id").equals(id))
                .findFirst()
                .orElseThrow(NotFoundException::new);
    }
}
