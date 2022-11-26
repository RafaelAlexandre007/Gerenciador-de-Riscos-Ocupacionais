package com.ergoeasy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ergoeasy.entities.LastViews;

@Repository
public interface LastViewsRepository extends JpaRepository<LastViews, Long>{

}
