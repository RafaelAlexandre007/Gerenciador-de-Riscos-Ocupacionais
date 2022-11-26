package com.ergoeasy.services;

import org.springframework.stereotype.Service;

import com.ergoeasy.repository.LastViewsRepository;

@Service
public class LastViewsService {
	
	final LastViewsRepository lastViewsRepository;
	
	public LastViewsService(LastViewsRepository lastViewsRepository) {
		this.lastViewsRepository = lastViewsRepository;
	}
}
