var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var timestamps = require('mongoose-timestamp');
var add_repair_work_requestSchema = new mongoose.Schema({  

    
      request_on : String,
      rb_no : String,
      br_code : String,
      route_code : String,
      job_no : String,
      customer_name : String,
      execution_by : String,
      service_type : String,
      mech_id : String,
      mech_name : String,
      zonal_eng_id : String,
      zonal_eng_name : String,
      assistant_name : String,
      branch_office_no : String,
      install_address : String,
      nature_of_work_id : String,
      nature_of_work_name : String,
      nature_of_work_process_id : String,
      nature_of_work_process_name : String,
      other_process : String,
      work_start_date : String,
      work_expected_date : String,
      tech_trained : String,
      man_power : String,
      mr_no : String,
      material_available_site : String,
      repair_toolkit : String,
      first_aid_kit : String,
      full_body_harness : String,
      hard_hat : String,
      safety_shoes : String,
      hand_gloves : String,
      chain_block_status : String,
      chain_block_capacity : String,
      webbing_belt : String,
      ladder_req : String,
      ms_pipe_req : String,
      rebelling_clamp : String,
      dshackle_req : String,
      barricate_main_req : String,
      completed_date : String,
      status : String,
      pref_id : String,
      
      repair_work_mech_id :  String,
      repair_work_mech_name :  String,
      repair_work_mech_no :  String,

      submitted_by_emp_code : String,
      submitted_by_num : String,
      submitted_by_name : String,
      submitted_by_on : String,
      delete_status : Boolean


      

});
mongoose.model('add_repair_work_request', add_repair_work_requestSchema);
add_repair_work_requestSchema.plugin(timestamps);
module.exports = mongoose.model('add_repair_work_request');