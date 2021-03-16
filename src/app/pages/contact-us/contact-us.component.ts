import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService, Maps } from 'src/app/services/api.service';
import { TranslateService } from '@ngx-translate/core';
const place = null as google.maps.places.PlaceResult;
@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    contactUsMainData
    constructor(public apiService: ApiService, private ngZone: NgZone, private formBuilder: FormBuilder, public service: HttpService, private toastr: ToastrService,
        public translate: TranslateService) {
        translate.setDefaultLang('en');
    }

    useLanguage(language: string) {
        this.translate.use(language);
    }

    ngOnInit() {

        this.service.get('/admin/getCmsData/2')
            .subscribe(res => {
                this.contactUsMainData = [res['data'][0]]
                console.log('this.contactUsMainData', this.contactUsMainData)
            })


        this.apiService.api.then(maps => {
            setTimeout(() => {
                this.initAutocomplete(maps, this.contactUsMainData);
            }, 1000);
        });

        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/)]],
            message: ['', Validators.required],

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    initAutocomplete(maps: Maps, data) {
        console.log('ddddd', data)
        var myLatlng = new google.maps.LatLng(data[0].latitude, data[0].longitude);
        var myOptions = {
            zoom: 10,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map"), myOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data[0].location
        });
    }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var user_id = '0';
        if (localStorage.getItem('userId') != null) {
            user_id = localStorage.getItem('userId');
        }
        this.registerForm.value.msg = this.registerForm.value.message
        this.service.post('/user/addContactUs/' + user_id, this.registerForm.value)

            .subscribe(res => {
                this.toastr.success(res['msg']);
                this.onReset()

            })
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
