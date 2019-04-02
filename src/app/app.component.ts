import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
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

  // parameter configuration wizard


  constructor(private renderer: Renderer) {

  }
  ngOnInit(): void {

  }

  inicialize() {

    // Toolbar extra buttons
    this.configureWizard([], 0);
  }

  configureWizard(disableSteps: any, step: number) {

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
      disabledSteps: disableSteps,
      toolbarSettings: {
        showNextButton: false,
        showPreviousButton: false,
        toolbarExtraButtons: [btnFinish, btnCancel]
      }
    });
  }

  goToPaypal() {
    alert('go to paypal');
    this.configureWizard([1], 2);
    const event = new MouseEvent('click', { bubbles: true });
    this.renderer.invokeElementMethod(
      this.step3.nativeElement, 'dispatchEvent', [event]);


  }

  goToSelectArticle() {
    alert('select article');
    this.configureWizard([2], 1);
    const event = new MouseEvent('click', { bubbles: true });
    this.renderer.invokeElementMethod(
      this.step2.nativeElement, 'dispatchEvent', [event]);

  }

  goToSelectService() {
    alert('Select service');

  }


}
