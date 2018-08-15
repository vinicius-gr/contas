package com.desafio.spring.dao;

import java.util.List;

import com.desafio.spring.model.Conta;

public interface ContaDao {

   long save(Conta conta);

   Conta get(long id);

   List<Conta> list();

   void update(long id, Conta conta);

   void delete(long id);

}
