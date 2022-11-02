package com.example.case_study.service.icontract;

import com.example.case_study.model.AttachFacility;
import com.example.case_study.model.ContractDetail;
import com.example.case_study.model.CustomerType;

import java.util.List;

public interface IAttachFacilityService {

    List<AttachFacility> findAll();

    AttachFacility findById(int id);
}
