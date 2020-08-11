package com.example.chairs.service;

import java.util.Optional;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.chairs.model.Chair;
import com.example.chairs.repository.ChairRepository;

@Service
public class ChairService{

    private ChairRepository chairRepository;
    
    public Chair saveChairDefault(Chair chair){
        return chairRepository.save(new Chair(chair.getRoom(), chair.getPatient(), false));
    }
    public Chair saveChair(Chair chair){
        return chairRepository.save(new Chair(chair.getRoom(), chair.getPatient(), chair.isOccupied()));
    }
    public Optional<Chair> findChairById(Long id){
        return chairRepository.findById(id);
    }
    public Iterable<Chair> listAllChairs(){
        return chairRepository.findAll();
    }
    
    public List<Chair> listAllChairsByRoom(String room){
        return chairRepository.findByRoomContaining(room);
    }

    public  void deleteChair(Long id){
        chairRepository.deleteById(id);
        return;
    }
    public  void deleteAllChairs(){
        chairRepository.deleteAll();
        return;
    }
    
}   