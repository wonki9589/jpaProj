package jpaProject.jpashop.controller;


import jpaProject.jpashop.domain.Product;
import jpaProject.jpashop.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class ItemController {

    private ItemService itemService;

    @GetMapping("/product/new")
    public String createForm(Model model) {
        model.addAttribute("form", new ProductDTO());
        return "";
    }


    @PostMapping("/product/new")
    public String create(ProductDTO form) {
        Product product = new Product();
        product.setId(form.getId());
        product.setCategory(form.getCategory());
        product.setCategory(form.getCategory());
        product.setName(form.getName());
        product.setPrice(form.getPrice());

        itemService.saveItem(product);
        return "";
    }
}
