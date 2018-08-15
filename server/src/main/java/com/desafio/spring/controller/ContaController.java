package com.desafio.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.spring.model.Conta;
import com.desafio.spring.service.ContaService;

@RestController
@RequestMapping("/contas")
public class ContaController {

   @Autowired
   private ContaService contaService;

   @PostMapping("/")
   public ResponseEntity<?> save(@RequestBody Conta conta) {
      long id = contaService.save(conta);
      return ResponseEntity.ok().body("Nova conta salva com ID:" + id);
   }

   @GetMapping("/{id}")
   public ResponseEntity<Conta> get(@PathVariable("id") long id) {
      Conta conta = contaService.get(id);
      return ResponseEntity.ok().body(conta);
   }

   @GetMapping("/")
   public ResponseEntity<List<Conta>> list() {
      List<Conta> contas = contaService.list();
      return ResponseEntity.ok().body(contas);
   }

   @PutMapping("/{id}")
   public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody Conta conta) {
      contaService.update(id, conta);
      return ResponseEntity.ok().body("Conta atualizada com sucesso.");
   }

   @DeleteMapping("/{id}")
   public ResponseEntity<?> delete(@PathVariable("id") long id) {
      contaService.delete(id);
      return ResponseEntity.ok().body("Conta removida.");
   }
}