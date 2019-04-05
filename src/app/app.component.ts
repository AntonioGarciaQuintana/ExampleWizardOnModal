import { Component, OnInit, ViewChild, ElementRef, Renderer, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'modalWizard';
  @ViewChild('step3') step3: ElementRef;
  @ViewChild('step2') step2: ElementRef;
  modalRef: BsModalRef | null;

  // parameter configuration wizard


  constructor(private renderer: Renderer, private modalService: BsModalService) {

  }
  ngOnInit(): void {

  }

  inicialize() {

    // Toolbar extra buttons
    this.configureWizard(0);
  }

  configureWizard(step: number) {

    const btnFinish = $('<button></button>').text('Finish')
      .addClass('btn btn-info')
      .on('click', () => { alert('Finish Clicked'); });
    const btnCancel = $('<button></button>').text('Cancel')
      .addClass('btn btn-danger')
      .on('click', () => { $('#smartwizard').smartWizard('reset'); });

    $('#smartwizard').smartWizard({
      selected: step,
      theme: 'arrows',
      transitionEffect: 'fade',
      showStepURLhash: false,
      hiddenSteps: true,
      disabledSteps: [],
      toolbarSettings: {
        showNextButton: false,
        showPreviousButton: false
       // b toolbarExtraButtons: [btnFinish, btnCancel]
      }
    });
  }

  goToPaypal() {
    this.configureWizard(2);
    $('#step3').trigger('click');
    const event = new MouseEvent('click', { bubbles: true });
    this.renderer.invokeElementMethod(
      this.step3.nativeElement, 'dispatchEvent', [event]);


  }

  goToSelectArticle() {
    this.configureWizard(1);
    const event = new MouseEvent('click', { bubbles: true });
    this.renderer.invokeElementMethod(
      this.step2.nativeElement, 'dispatchEvent', [event]);

  }

  goToSelectService() {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

}
