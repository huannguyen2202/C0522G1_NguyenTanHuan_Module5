package com.example.case_study.service.icontract;

import com.example.case_study.model.Contract;
import com.example.case_study.model.ContractDetail;
import com.example.case_study.model.CustomerType;

import java.util.List;

public interface IContractDetailService {

    List<ContractDetail> findAll();

    ContractDetail findById(int id);


    void save(ContractDetail contractDetail);
}
