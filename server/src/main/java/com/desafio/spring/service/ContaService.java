package com.desafio.spring.service;

import java.util.List;

import com.desafio.spring.model.Conta;

public interface ContaService {

   long save(Conta conta);
   Conta get(long id);
   List<Conta> list();
   void update(long id, Conta conta);
   void delete(long id);
}
