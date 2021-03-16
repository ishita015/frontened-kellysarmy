import { Component, Inject, ElementRef, ViewChild, NgZone, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, Maps } from 'src/app/services/api.service';
const place = null as google.maps.places.PlaceResult;
import * as jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import 'jspdf-autotable';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-service-report',
  templateUrl: './service-report.component.html',
  styleUrls: ['./service-report.component.css']
})
export class ServiceReportComponent implements OnInit {
  public start = '';
  public end = '';
  @ViewChild("search")
  public searchElementRef: ElementRef;
  public place: google.maps.places.PlaceResult;
  constructor(public service: HttpService,
    public translate: TranslateService,
    private router: Router, public apiService: ApiService, private ngZone: NgZone) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
  getDetails;
  excel_data = [];
  filteredProducts;
  ngOnInit(): void {
    this.getReportsDetails();
    this.getAllVender();
    this.apiService.api.then(maps => {
      this.initAutocomplete(maps);
    });
  }

  lat = 0;
  lng = 0;
  location = '';

  initAutocomplete(maps: Maps) {
    let autocomplete = new maps.places.Autocomplete(this.searchElementRef.nativeElement);
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        this.onPlaceChange(autocomplete.getPlace());
      });
    });
  }

  onPlaceChange(place) {
    this.location = place.name,
      this.lat = place.geometry.location.lat(),
      this.lng = place.geometry.location.lng()
    this.FilterData()


  }
  getReportsDetails() {
    this.service.get('/api/getReportsByServiceProvider/' + localStorage.getItem('userId')).subscribe(res => {
      var a = res['data'];
      this.getDetails = a;
    })
  }
  VenderData = []
  getAllVender() {
    this.service.get('/admin/get-all-service-provider')
      .subscribe(res => {
        this.VenderData = res['data'];

      })
  }

  getDater(data) {
    console.log(data);
  }

  dateRangeText = ''
  FilterData() {
    // this.dateRangeText = document.getElementById('border_date')['value'] +'-'+ document.getElementById('order_date_end')['value']
    var created_date = moment(document.getElementById('border_date')['value']).format("YYYY-MM-DD");
    // var end_date = moment(document.getElementById('order_date_end')['value']).format("YYYY-MM-DD");
    var end_date = '';
    var service_provider_id = localStorage.getItem('userId');
    var booking_status_id = document.getElementById('booking_status_id')['value']
    console.log('booking_status_id', document.getElementById('border_date'))


    var status = 1;
    var progress_status = 1;
    if (booking_status_id == 'pending') {
      status = 1;
      progress_status = 1;
    }

    if (booking_status_id == 'progress') {
      status = 2;
      progress_status = 1;
    }

    if (booking_status_id == 'complete') {
      status = 2;
      progress_status = 3;
    }

    var s_data = { created_date, service_provider_id, latitude: this.lat, longitude: this.lng, location: this.location, status, progress_status };
    if (s_data.created_date == 'Invalid date') {
      delete s_data.created_date
    }
    // if(s_data.end_date == 'Invalid date'){
    //   delete s_data.end_date
    // }
    if (s_data.service_provider_id == 'no') {
      delete s_data.service_provider_id
    }
    if (booking_status_id == 'no') {
      delete s_data.status
      delete s_data.progress_status
    }
    if (this.location == '') {
      delete s_data.latitude
      delete s_data.longitude
      delete s_data.location
    }
    if (this.location != '') {
      delete s_data.status
      delete s_data.progress_status
    }
    if (booking_status_id == 'no') {
      delete s_data.status
      delete s_data.progress_status
    }
    if (booking_status_id != 'no' && this.location != '') {
      s_data.status = status;
      s_data.progress_status = progress_status;
    }
    if (s_data.created_date != 'Invalid date' && this.location != '') {
      delete s_data.status
      delete s_data.progress_status
    }
    if (s_data.created_date != 'Invalid date' && booking_status_id != 'no' && this.location != '') {
      s_data.status = status;
      s_data.progress_status = progress_status;
    }


    //   created_date
    // latitude
    // longitude
    // service_provider_id
    // status
    // progress_status
    console.log('border_date', s_data)
    // return
    this.service.post('/api/reports-advanced-filter-service-provider', s_data)
      .subscribe(res => {

        // this.getDetails = res['data'];
        var a = res['data'];
        this.getDetails = a;
      })

  }

  RefreshData() {


    this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      this.router.navigate(['service-providers/service-report']);
    });
    // document.getElementById('border_date')['value']=""
    // document.getElementById('booking_status_id')['value']=""
    // this.ngOnInit();
  }
  convert() {
    var doc = new jsPDF();
    var col = ["S.no", "Service Name", "Customer Name", 'Location', 'Amount', 'Vender Name ', 'Vender Amount ', 'Admin Amount ', 'Booking Date ', 'Status'];
    var rows = [];
    this.getDetails.forEach((element, i) => {
      var temp = [i + 1, element.service_name, element.customer_name, element.location, element.coast, element.service_provider_name, element.service_provider_amount, element.admin_amount, element.created_date, element.message];
      rows.push(temp);

    });

    doc.autoTable(col, rows);
    doc.save('Test.pdf');
  }

  exporttoExcle() {
    var excel_data = [];
    var status;
    for (var i = 0; i < this.getDetails.length; i++) {

      if (this.getDetails[i].request_status == 1) {
        status = 'Pending';
      }
      if (this.getDetails[i].request_status == 2 && this.getDetails[i].request_progress_status == 1) {
        status = 'Progress';
      }
      if (this.getDetails[i].request_status == 2 && this.getDetails[i].request_progress_status == 2) {
        status = 'Progress';
      }
      if (this.getDetails[i].request_status == 2 && this.getDetails[i].request_progress_status == 3) {
        status = 'Complete';
      }
      excel_data.push({
        "Service Name": this.getDetails[i].service_name,
        "Customer Name": this.getDetails[i].customer_name,
        "Location": this.getDetails[i].location,
        "Amount": this.getDetails[i].amount,
        "Vender Amount": this.getDetails[i].service_provider_amount,
        "Admin Amount": this.getDetails[i].admin_amount,
        "Booking Date": this.getDetails[i].booking_date,
          "Booking Time": this.getDetails[i].booking_time,
        "Hours": this.getDetails[i].by_the_houre,
        "Cleaning Duration": this.getDetails[i].cleaning_duration,
        "Pets": this.getDetails[i].pets,
        "No Of Pets": this.getDetails[i].no_of_pets,
        "Access Property": this.getDetails[i].access_property,
        "Cost": this.getDetails[i].coast,
        "Latitude": this.getDetails[i].latitude,
        "Longitude": this.getDetails[i].longitude,
        "Created Date": this.getDetails[i].created_date,
        "No Of Cleaning": this.getDetails[i].no_of_cleaning,
        "Cleaning Description": this.getDetails[i].cleaning_descrip,
        "Payment Status": this.getDetails[i].payment_status,
        "Status": status
      })

    }
    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(excel_data);
    XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
    XLSX.writeFile(workBook, 'Report.xlsx'); // initiate a file download in browser
  }

}
