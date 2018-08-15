package com.desafio.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.desafio.spring.dao.ContaDao;
import com.desafio.spring.model.Conta;

@Service
@Transactional(readOnly = true)
public class ContaServiceImp implements ContaService {

   @Autowired
   private ContaDao contaDao;

   @Transactional
   @Override
   public long save(Conta conta) {
      return contaDao.save(conta);
   }

   @Override
   public Conta get(long id) {
      return contaDao.get(id);
   }

   @Override
   public List<Conta> list() {
      return contaDao.list();
   }

   @Transactional
   @Override
   public void update(long id, Conta conta) {
      contaDao.update(id, conta);
   }

   @Transactional
   @Override
   public void delete(long id) {
      contaDao.delete(id);
   }

}
