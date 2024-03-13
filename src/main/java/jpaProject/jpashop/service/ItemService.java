package jpaProject.jpashop.service;

import jpaProject.jpashop.domain.Product;
import jpaProject.jpashop.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    @Transactional
    public void saveItem(Product product){
        itemRepository.save(product);
    }

    public List<Product> findItems(){
        return itemRepository.findAll();
    }

    public Product findOne(Long itemId){
        return itemRepository.findOne(itemId);
    }
}
