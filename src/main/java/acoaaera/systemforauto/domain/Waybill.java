package acoaaera.systemforauto.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table
@ToString(of = {"id", "auto"})
@EqualsAndHashCode(of = {"id"})
public class Waybill {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String auto;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuto() {
        return auto;
    }

    public void setAuto(String auto) {
        this.auto = auto;
    }
}
