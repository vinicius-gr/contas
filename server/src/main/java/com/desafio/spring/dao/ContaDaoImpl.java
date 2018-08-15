package com.desafio.spring.dao;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.desafio.spring.model.Conta;

@Repository
public class ContaDaoImpl implements ContaDao {

   @Autowired
   private SessionFactory sessionFactory;

   @Override
   public long save(Conta conta) {
      sessionFactory.getCurrentSession().save(conta);
      return conta.getId();
   }

   @Override
   public Conta get(long id) {
      return sessionFactory.getCurrentSession().get(Conta.class, id);
   }

   @Override
   public List<Conta> list() {
      Session session = sessionFactory.getCurrentSession();
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<Conta> cq = cb.createQuery(Conta.class);
      Root<Conta> root = cq.from(Conta.class);
      cq.select(root);
      Query<Conta> query = session.createQuery(cq);
      return query.getResultList();
   }

   @Override
   public void update(long id, Conta conta) {
      Session session = sessionFactory.getCurrentSession();
      Conta conta2 = session.byId(Conta.class).load(id);
      conta2.setDescricao(conta.getDescricao());
      conta2.setTipo(conta.getTipo());
      conta2.setValor(conta.getValor());
      conta2.setVencimento(conta.getVencimento());
      session.flush();
   }

   @Override
   public void delete(long id) {
      Session session = sessionFactory.getCurrentSession();
      Conta conta = session.byId(Conta.class).load(id);
      session.delete(conta);
   }

}
