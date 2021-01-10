package acoaaera.systemforauto.controller;

import acoaaera.systemforauto.domain.Waybill;
import acoaaera.systemforauto.repo.WaybillRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("waybill")
public class WaybillController {

    private final WaybillRepo waybillRepo;

    public WaybillController(WaybillRepo waybillRepo) {
        this.waybillRepo = waybillRepo;
    }

    @GetMapping
    public List<Waybill> list() {
        return waybillRepo.findAll();
    }

    @GetMapping("{id}")
    public Waybill getOne(@PathVariable("id") Waybill waybill) {
        return waybill;
    }

    @PostMapping
    public Waybill create(@RequestBody Waybill waybill){
        return waybillRepo.save(waybill);
    }

    @PutMapping("{id}")
    public Waybill update(
            @PathVariable("id") Waybill waybillFromDb,
            @RequestBody Waybill waybill){
        BeanUtils.copyProperties(waybill, waybillFromDb, "id");

        return waybillRepo.save(waybillFromDb);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Waybill waybill){
         waybillRepo.delete(waybill);
    }
}
