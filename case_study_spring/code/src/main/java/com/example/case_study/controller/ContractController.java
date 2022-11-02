package com.example.case_study.controller;

import com.example.case_study.model.Contract;
import com.example.case_study.model.ContractDetail;
import com.example.case_study.service.icontract.IAttachFacilityService;
import com.example.case_study.service.icontract.IContractDetailService;
import com.example.case_study.service.icontract.IContractService;
import com.example.case_study.service.icustomer.ICustomerService;
import com.example.case_study.service.iemployee.IEmployeeService;
import com.example.case_study.service.ifacility.IFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/contract")
public class ContractController {

    @Autowired
    private IContractService iContractService;

    @Autowired
    private ICustomerService iCustomerService;

    @Autowired
    private IEmployeeService iEmployeeService;

    @Autowired
    private IFacilityService iFacilityService;

    @Autowired
    private IAttachFacilityService iAttachFacilityService;

    @Autowired
    private IContractDetailService iContractDetailService;

    @GetMapping("")
    public String showContract(@PageableDefault(value = 5) Pageable pageable, Model model) {
        model.addAttribute("contracts", iContractService.findAllContract(pageable));
        model.addAttribute("facility", iFacilityService.findAll());
        model.addAttribute("customers", iCustomerService.findAll(pageable));
        model.addAttribute("employees", iEmployeeService.findAll());
        model.addAttribute("contractDetails", iContractDetailService.findAll());
        model.addAttribute("attachFacility", iAttachFacilityService.findAll());
        model.addAttribute("contract", new Contract());
        model.addAttribute("contractDetail", new ContractDetail());
        return "contract/list";
    }

    @PostMapping("/save")
    public String save(@ModelAttribute Contract contract, RedirectAttributes redirectAttributes) {
        iContractService.save(contract);
        redirectAttributes.addFlashAttribute("message", "Successfully Added New !!");

        return "redirect:/contract";
    }

    @PostMapping("/addContractDetail")
    public String saveDetail(@ModelAttribute ContractDetail contractDetail, RedirectAttributes redirectAttributes) {
        iContractDetailService.save(contractDetail);
        redirectAttributes.addFlashAttribute("message", "Successfully Added New !!");
        return "redirect:/contract";
    }

    @GetMapping("/{id}")
    public String showAttachFacility(@PathVariable Integer id, Model model) {
        model.addAttribute("attachFacilityList", iAttachFacilityService.findById(id));

        return "contract/attachList";
    }
}
