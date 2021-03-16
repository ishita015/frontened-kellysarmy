const sql = require('../../db');
var idVerificationModel = {}

//***** get services start*****//


idVerificationModel.getMain = () => {
    return new Promise((resolve, reject) => {
        sql.query(
            "SELECT * FROM services WHERE service_type = 1", (err, response) => {
                if (response != "" && response != "undefined") {
                    resolve(response);
                } else {
                    resolve(false);
                }
            });
    });
}

idVerificationModel.getAdditional = () => {
    return new Promise((resolve, reject) => {
        sql.query(
            "SELECT * FROM services WHERE service_type = 2", (err, response) => {
                if (response != "" && response != "undefined") {
                    resolve(response);
                } else {
                    resolve(false);
                }
            });
    });
}

//***** get services end*****//

//***** service Provider start *****//

//***** service provider register start *****//

idVerificationModel.providerRegister = (newUser) => {

    return new Promise((resolve, reject) => {
        sql.query("INSERT INTO user SET ?", newUser, (err, response) => {
            if (response != "" && response != "undefined") {
                resolve(response);
            } else {
                resolve(false);
            }
        });
    });
}
// 
idVerificationModel.professionId = (professionIdTable) => {
    return new Promise((resolve, reject) => {
        sql.query("INSERT INTO professional_id_verification SET ?", professionIdTable, (err, response) => {
            console.log("errr", err);
            console.log("response", response);
            if (response != "" && response != "undefined") {
                resolve(response);
            } else {
                resolve(false);
            }
        });
    });
}
// 
idVerificationModel.chooseService = (selectServices) => {
    return new Promise((resolve, reject) => {
        sql.query("INSERT INTO verification_service SET ?", selectServices, (err, response) => {
            if (response != "" && response != "undefined") {
                resolve(response);
            } else {
                resolve(false);
            }

        })
    });
}
//
idVerificationModel.insertDoc = (fileData) => {
    return new Promise((resolve, reject) => {
        sql.query("INSERT INTO verification_document SET ?", fileData, (err, response) => {
            if (response != "" && response != "undefined") {
                resolve(response);
            } else {
                resolve(false);
            }

        })
    });
}
//

idVerificationModel.docIdInsert = (docId, docIdData) => {
    console.log("docId", docId);
    console.log("docIdData", docIdData);

    return new Promise((resolve, reject) => {
        sql.query("UPDATE professional_id_verification SET ? WHERE id=" + docId, docIdData, (err, response) => {
            console.log("response", response);
            console.log("err", err);

            if (response != "" && response != "undefined") {
                resolve(response);
            } else {
                resolve(false);
            }

        })
    });
}
//
idVerificationModel.availablity = (avaData) => {
    return new Promise((resolve, reject) => {
        sql.query("INSERT INTO availability SET ?", avaData, (err, response) => {
            console.log(err);
            if (response != "" && response != "undefined") {
                resolve(response);
            } else {
                resolve(false);
            }

        })
    });
}

idVerificationModel.avalaInsert = (docId, avalaData) => {
    console.log("docId", docId);
    console.log("docIdData", avalaData);

    return new Promise((resolve, reject) => {
        sql.query("UPDATE professional_id_verification SET ? WHERE id=" + docId, avalaData, (err, response) => {
            console.log("response", response);
            console.log("err", err);

            if (response != "" && response != "undefined") {
                resolve(response);
            } else {
                resolve(false);
            }

        })
    });
}
//***** service provider register end *****//


//***** service Provider end *****//



//*****  check email exist start *****//

idVerificationModel.checkEmail = (userEmail) => {
    var email = userEmail.email;
    return new Promise((resolve, reject) => {
        sql.query(
            "SELECT * FROM user WHERE email = '" + email + "'", (err, response) => {
                if (response != "" && response != "undefined") {
                    resolve(response);
                } else {
                    resolve(false);
                }
            });
    });
}

//*****  check email exist end *****//

//*****  check postcode exist start *****//

idVerificationModel.checkPostcode = (postcode) => {
    var pin_code = postcode.pin_code;
    return new Promise((resolve, reject) => {
        sql.query(
            "SELECT * FROM post_code WHERE pin_code = '" + pin_code + "'", (err, response) => {
                if (response != "" && response != "undefined") {
                    resolve(response);
                } else {
                    resolve(false);
                }
            });
    });
}
//*****  check postcode exist end *****//
//**** Get single service provider start ****//

idVerificationModel.getById = (verificationId) => {
    console.log(verificationId);
    return new Promise((resolve, reject) => {
        sql.query(
            "SELECT pv.id,pv.provider_type,pv.vat_number,pv.team_size,pv.rate_per_hour,u.name,u.email,u.mobile,u.image,pc.pin_code FROM professional_id_verification as pv LEFT JOIN user as u ON u.id=pv.user_id LEFT JOIN post_code as pc ON pc.id=pv.pin_code_id WHERE pv.id=" + verificationId, (err, response) => {
                console.log("eerr", err)
                if (response != "" && response != "undefined") {
                    resolve(response);
                } else {
                    resolve(false);
                }
            });
    });
}

idVerificationModel.getDocs = (docId) => {
    return new Promise((resolve, reject) => {
        sql.query("SELECT * FROM verification_document WHERE verification_id=" + docId, (err, result) => {
            if (result != "" && result != "undefined") {
                resolve(result);
            } else {
                resolve(false);
            }
        });
    })
}
idVerificationModel.getServices = (serviceId) => {
    return new Promise((resolve, reject) => {
        sql.query("SELECT serv.service_name,serv.id, vs.verification_id,vs.user_service_status FROM verification_service as vs LEFT JOIN services as serv ON serv.id=vs.service_id WHERE verification_id=" + serviceId, (err, result) => {
            if (result != "" && result != "undefined") {
                resolve(result);
            } else {
                resolve(false);
            }
        });
    })
}

idVerificationModel.getDays = (avaId) => {
    console.log("sId", avaId);
    return new Promise((resolve, reject) => {
        sql.query("SELECT ava.start_time, ava.end_time, wd.day_name,ava.day_id FROM availability as ava LEFT JOIN week_day as wd ON wd.id=ava.day_id WHERE verification_id=" + avaId, (err, result) => {
            console.log("result", err);
            if (result != "" && result != "undefined") {
                resolve(result);
            } else {
                resolve(false);
            }
        });
    })
}

//**** Get single service provider end ****//


//**** Get postcode lsit start ****//

idVerificationModel.getPostcode = () => {
    return new Promise((resolve, reject) => {
        sql.query(
            "SELECT * FROM post_code", (err, response) => {
                if (response != "" && response != "undefined") {
                    resolve(response);
                } else {
                    resolve(false);
                }
            });
    });
}
//**** Get postcode lsit end ****//

//**** Update service provider profile start ****//
idVerificationModel.providerUpdate = (id, provDetails) => {
    return new Promise((resolve, reject) => {
        sql.query("UPDATE user SET ? WHERE id=" + id, provDetails, (err, response) => {
            if (response != "" && response != "undefined") {
                resolve(response);
            } else {
                resolve(false);
            }
        })
    });
}

idVerificationModel.profeIdUpdate = (id, provDetails) => {
    return new Promise((resolve, reject) => {
        sql.query("UPDATE professional_id_verification SET ? WHERE user_id=" + id, provDetails, (err, response) => {
            if (response != "" && response != "undefined") {
                resolve(response);
            } else {
                resolve(false);
            }
        })
    });
}

idVerificationModel.getVerificationId = (id) => {
    return new Promise((resolve, reject) => {
        sql.query("SELECT id FROM professional_id_verification WHERE user_id=" + id, (err, response) => {
            if (response != "" && response != "undefined") {
                resolve(response);
            } else {
                resolve(false);
            }
        })
    });
}

idVerificationModel.checkService = (id) => {
    return new Promise((resolve, reject) => {
        sql.query("SELECT * FROM verification_service WHERE verification_id=" + id, (err, response) => {
            console.log('err', err);
            if (response != "" && response != "undefined") {
                resolve(response);
            } else {
                resolve(false);
            }
        })
    });
}

idVerificationModel.serviceUpdate = (selectServices) => {
    var service_id = selectServices.service_id;
    var verification_id = selectServices.verification_id;
    console.log("verifIdaaaaaaaaa", verification_id);
    return new Promise((resolve, reject) => {

        sql.query(`SELECT * FROM verification_service WHERE verification_id= ${verification_id} AND service_id = ${service_id}`, (err, response) => {
            // console.log("responseccc", response);
            // console.log("response.user_service_status", response[0].user_service_status);

            if (response != "" && response != "undefined") {
                if (response[0].user_service_status) {
                    sql.query(`UPDATE verification_service SET user_service_status = 0 WHERE verification_id= ${verification_id} AND service_id=${service_id}`, (err, response) => {
                        console.log("00000000", response);
                        if (response != "" && response != "undefined") {
                            resolve(response);
                        } else {
                            resolve(false);
                        }
                    })
                } else {
                    sql.query(`UPDATE verification_service SET user_service_status = 1 WHERE verification_id= ${verification_id} AND service_id=${service_id}`, (err, response) => {
                        console.log("111111", response);
                        if (response != "" && response != "undefined") {
                            resolve(response);
                        } else {
                            resolve(false);
                        }
                    })
                }
            } else {
                sql.query("INSERT INTO verification_service SET ?", selectServices, (err, response) => {
                    console.log("serviceInsert", response);
                    console.log("errrr", err);
                    if (response != "" && response != "undefined") {
                        resolve(response);
                    } else {
                        resolve(false);
                    }
                });
            }
        })



        // sql.query(`UPDATE verification_service SET user_service_status = 1 WHERE verification_id= ${verification_id} AND service_id=${service_id}`,(err,response)=>{
        // console.log('err',err);
        // console.log('response update service',response);

        // if(response.affectedRows == 0){
        // sql.query("INSERT INTO verification_service SET ?",selectServices,(err,response)=>{
        // console.log("serviceInsert",response);
        // if(response != "" && response != "undefined"){
        // resolve(response);
        // }else{
        // resolve(false);
        // }
        // });
        // }else{
        // sql.query(`UPDATE verification_service SET user_service_status = 0 WHERE service_id != ${service_id} AND verification_id = ${verification_id}`,(err,response)=>{
        // console.log("SELECT****************",response);
        // if(response != "" && response != "undefined"){
        // resolve(response);
        // }else{
        // resolve(false);
        // }
        // });
        // resolve(false);
        // }
        // });
    });
}

//**** Update service provider profile start ****//
module.exports = idVerificationModel;
