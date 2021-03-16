import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { HttpService } from 'src/app/services/http.service';
import { VariableService } from 'src/app/services/variable.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-delete-my-account',
	templateUrl: './delete-my-account.component.html',
	styleUrls: ['./delete-my-account.component.css']
})
export class DeleteMyAccountComponent implements OnInit {

	constructor(public service: HttpService,
		private toastr: ToastrService,
		public translate: TranslateService,
		private router: Router,
		public variable: VariableService) {

		translate.setDefaultLang('en');
	}

	useLanguage(language: string) {
		localStorage.setItem('language', language);
		this.translate.use(language);
	}
	ngOnInit(): void {
	}
	reason = 'Other'
	changeRadio(checked, reason) {
		if (checked == true) {
			this.reason = reason
		}
	}
	deleteAccount() {
		var feedback = document.getElementById('feedbackId')['value'];
		var languageLogout = localStorage.getItem("language")
		var title
		var btn_yes
		var btn_cancel;
		if (languageLogout == "en") {
		  title = 'Are you sure want to delete account?'
		  btn_yes = 'Yes'
		  btn_cancel = 'Cancel'
		} else {
		  title = 'Tem certeza que deseja excluir a conta?'
		  btn_yes = 'Sim'
		  btn_cancel = 'Cancelar'
		}
		Swal.fire({
			title: title,
			icon: 'warning',
			showCancelButton: btn_cancel,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: btn_yes
		}).then((result) => {
			if (result.isConfirmed) {
				this.service.post('/user/deleteUser/' + localStorage.getItem('userId'), { reason: this.reason, feedback: feedback })
					.subscribe(res => {
						if (res['status'] == 1) {
							this.toastr.success(res['msg'])
							this.variable.login = true;
							this.variable.logout = false;
							localStorage.clear();
							this.router.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => this.router.navigate(["login"]));
						} else {
							this.toastr.warning(res['msg'])
						}
					})
			}


		})
	}

}
