//package com.example.case_study.service.impl;
//
//import com.example.case_study.model.MyUserDetail;
//import com.example.case_study.model.User;
//import com.example.case_study.repository.IUserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//
//@Service
//@Transactional
//public class MyUserDetailService implements UserDetailsService {
//    @Autowired
//    private IUserRepository userRepository;
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUserName(username);
//        if (user == null) {
//            throw new UsernameNotFoundException("User name" + username + "không tồn tại");
//        }
//        return new MyUserDetail(user);
//    }
//    }

