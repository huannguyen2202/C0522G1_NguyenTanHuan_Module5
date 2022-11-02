package com.example.case_study.service.impl.contract;

import com.example.case_study.dto.IContractDto;
import com.example.case_study.model.Contract;
import com.example.case_study.repository.contract.IContractRepository;
import com.example.case_study.service.icontract.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ContractService implements IContractService {

    @Autowired
    private IContractRepository iContractRepository;

    @Override
    public Contract findById(int id) {
        return iContractRepository.findById(id);
    }

    @Override
    public Page<IContractDto> findAllContract(Pageable pageable) {
        return iContractRepository.findAllDto(pageable);
    }

    @Override
    public void save(Contract contract) {
        iContractRepository.save(contract);
    }
}
