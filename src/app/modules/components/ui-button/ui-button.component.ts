import { Component, EventEmitter, Input, Output } from '@angular/core'

// TODO: move to shared type folder
type HTMLButtonTypeAttribute = 'submit' | 'reset' | 'button'

@Component({
	selector: 'app-ui-button',
	standalone: true,
	imports: [],
	templateUrl: './ui-button.component.html',
})
export class UiButtonComponent {
	@Input() type?: HTMLButtonTypeAttribute = 'button'
	@Input() disabled: boolean = false
	@Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()

	onClickButton(event: MouseEvent) {
		this.onClick.emit(event)
	}
}
