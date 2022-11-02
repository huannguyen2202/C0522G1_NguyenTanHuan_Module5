package com.example.case_study.service.impl.contract;

import com.example.case_study.model.Contract;
import com.example.case_study.model.ContractDetail;
import com.example.case_study.repository.contract.IContractDetailRepository;
import com.example.case_study.service.icontract.IContractDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractDetailService implements IContractDetailService {

    @Autowired
    private IContractDetailRepository iContractDetailRepository;

    @Override
    public List<ContractDetail> findAll() {
        return iContractDetailRepository.findAll();
    }

    @Override
    public ContractDetail findById(int id) {
        return iContractDetailRepository.findById(id).get();
    }

    @Override
    public void save(ContractDetail contractDetail) {
        iContractDetailRepository.save(contractDetail);
    }
}
