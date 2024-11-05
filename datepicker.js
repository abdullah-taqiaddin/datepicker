import { Temporal } from 'temporal-polyfill';

const localizationObject = {
    ar: {
        label: 'التقويم',
        calendar: 'التقويم',
        month: 'شهر',
        year: 'سنة',
        previousMonth: 'الشهر السابق',
        nextMonth: 'الشهر التالي',
        previousYear: 'السنة السابقة',
        nextYear: 'السنة التالية',
        previousDecade: 'العقد السابق',
        nextDecade: 'العقد التالي',
        today: 'اليوم',
        selected: 'تم التحديد',
        focused: 'مركز',
        switchTo: 'التبديل إلى',
        hours: 'ساعات',
        minutes: 'دقائق',
        'islamic-umalqura': {
            label: 'التقويم الهجري',
            1: 'محرم',
            2: 'صفر',
            3: 'ربيع الأول',
            4: 'ربيع الثاني',
            5: 'جمادى الأولى',
            6: 'جمادى الآخرة',
            7: 'رجب',
            8: 'شعبان',
            9: 'رمضان',
            10: 'شوال',
            11: 'ذو القعدة',
            12: 'ذو الحجة',
        },
        gregory: {
            label: 'التقويم الميلادي',
            1: 'يناير',
            2: 'فبراير',
            3: 'مارس',
            4: 'أبريل',
            5: 'مايو',
            6: 'يونيو',
            7: 'يوليو',
            8: 'أغسطس',
            9: 'سبتمبر',
            10: 'أكتوبر',
            11: 'نوفمبر',
            12: 'ديسمبر',
        },
        weekdays: {
            1: { short: 'الاثنين', long: 'الاثنين' },
            2: { short: 'الثلاثاء', long: 'الثلاثاء' },
            3: { short: 'الأربعاء', long: 'الأربعاء' },
            4: { short: 'الخميس', long: 'الخميس' },
            5: { short: 'الجمعة', long: 'الجمعة' },
            6: { short: 'السبت', long: 'السبت' },
            7: { short: 'الأحد', long: 'الأحد' },
        },
    },
    en: {
        label: 'Calendar',
        calendar: 'Calendar',
        month: 'Month',
        year: 'Year',
        previousMonth: 'Previous month',
        nextMonth: 'Next month',
        previousYear: 'Previous year',
        nextYear: 'Next year',
        previousDecade: 'Previous decade',
        nextDecade: 'Next decade',
        today: 'Today',
        selected: 'Selected',
        focused: 'Focused',
        switchTo: 'Switch to',
        hours: 'Hours',
        minutes: 'Minutes',
        'islamic-umalqura': {
            label: 'Hijri Calendar',
            1: 'Muharram',
            2: 'Safar',
            3: 'Rabi I',
            4: 'Rabi II',
            5: 'Jumada I',
            6: 'Jumada II',
            7: 'Rajab',
            8: 'Sha\'ban',
            9: 'Ramadan',
            10: 'Shawwal',
            11: 'Dhu al-Qi\'dah',
            12: 'Dhu al-Hijjah',
        },
        gregory: {
            label: 'Gregorian Calendar',
            1: 'January',
            2: 'February',
            3: 'March',
            4: 'April',
            5: 'May',
            6: 'June',
            7: 'July',
            8: 'August',
            9: 'September',
            10: 'October',
            11: 'November',
            12: 'December',
        },
        weekdays: {
            1: { short: 'Mon', long: 'Monday' },
            2: { short: 'Tue', long: 'Tuesday' },
            3: { short: 'Wed', long: 'Wednesday' },
            4: { short: 'Thu', long: 'Thursday' },
            5: { short: 'Fri', long: 'Friday' },
            6: { short: 'Sat', long: 'Saturday' },
            7: { short: 'Sun', long: 'Sunday' },
        },
    },
};

class AccessibleDatePicker {
    constructor(config = {}) {
        this.config = {
            dateFormat: 'long',
            locale: 'ar',
            calendar: 'gregory',
            ...config,
        };
        this.datePickers = [];
        this.localizationObject = localizationObject;
        this.initializePickers();
    }

    initializePickers() {
        const dateInputs = document.querySelectorAll('input[data-datepicker="true"]');
        dateInputs.forEach(input => {
            const datePickerInstance = new DatePickerInstance(input, this.config);
            this.datePickers.push(datePickerInstance);
        });
    }
}

class DatePickerInstance {
    constructor(input, globalConfig) {
        this.input = input;
        this.config = this.getConfig(input, globalConfig);
        this.locale = this.config.locale;
        this.currentCalendar = this.config.calendar;
        this.today = Temporal.Now.plainDate(this.currentCalendar);
        this.focusedDate = this.today;
        this.selectedDates = [];
        this.selectedTime = null;
        this.templates = {
            renderHeader: this.defaultRenderHeader.bind(this),
            renderCell: this.defaultRenderCell.bind(this),
            renderCalendar: this.defaultRenderCalendar.bind(this),
            renderOpenButton: this.defaultRenderOpenButton.bind(this),
            renderDatePicker: this.defaultRenderDatePicker.bind(this),
            renderTimePicker: this.defaultRenderTimePicker.bind(this),
        };
        this.setupPicker();
    }

    getConfig(input, globalConfig) {
        const defaultConfig = {
            todayClass: 'today',
            selectedClass: 'selected',
            focusedClass: 'focused',
            calendarClasses: 'calendar',
            rowClasses: 'row',
            cellClasses: 'cell',
            dateClasses: 'date',
            availableCalendars: ['gregory', 'islamic-umalqura'],
            dateFormat: 'long',
            minDate: input.min ? Temporal.PlainDate.from(input.min) : null,
            maxDate: input.max ? Temporal.PlainDate.from(input.max) : null,
            weekStartsOn: 7,
            enableTime: input.dataset.datepickerEnableTime === 'true',
            enableRange: input.dataset.datepickerEnableRange === 'true',
            enableMultipleDates: input.dataset.datepickerEnableMultipleDates === 'true',
            disabledTimes: input.dataset.datepickerDisabledTimes ? input.dataset.datepickerDisabledTimes.split(',') : [],
            locale: globalConfig.locale || 'ar',
            calendar: globalConfig.calendar || input.dataset.datepickerCalendar || 'gregory',
        };

        const weekStartsOnInput = parseInt(input.dataset.datepickerWeekStartsOn) || defaultConfig.weekStartsOn;
        const weekStartsOnNumber = (weekStartsOnInput >= 1 && weekStartsOnInput <= 7) ? weekStartsOnInput : defaultConfig.weekStartsOn;

        return {
            ...defaultConfig,
            todayClass: input.dataset.datepickerConfigTodayClass || defaultConfig.todayClass,
            selectedClass: input.dataset.datepickerConfigSelectedClass || defaultConfig.selectedClass,
            focusedClass: input.dataset.datepickerConfigFocusedClass || defaultConfig.focusedClass,
            calendarClasses: input.dataset.datepickerConfigCalendarClasses || defaultConfig.calendarClasses,
            rowClasses: input.dataset.datepickerConfigRowClasses || defaultConfig.rowClasses,
            cellClasses: input.dataset.datepickerConfigCellClasses || defaultConfig.cellClasses,
            dateClasses: input.dataset.datepickerConfigDateClasses || defaultConfig.dateClasses,
            availableCalendars: input.dataset.datepickerConfigCalendars ? input.dataset.datepickerConfigCalendars.split(',') : defaultConfig.availableCalendars,
            dateFormat: input.dataset.datepickerFormat || globalConfig.dateFormat || defaultConfig.dateFormat,
            minDate: defaultConfig.minDate,
            maxDate: defaultConfig.maxDate,
            weekStartsOn: weekStartsOnNumber,
            enableTime: defaultConfig.enableTime,
            enableRange: defaultConfig.enableRange,
            enableMultipleDates: defaultConfig.enableMultipleDates,
            disabledTimes: defaultConfig.disabledTimes,
            locale: input.dataset.datepickerLocale || globalConfig.locale || defaultConfig.locale,
            calendar: input.dataset.datepickerCalendar || globalConfig.calendar || defaultConfig.calendar,
        };
    }

    setupPicker() {
        this.datePicker = this.templates.renderDatePicker();
        this.openButton = this.templates.renderOpenButton();
        this.input.parentNode.insertBefore(this.openButton, this.input.nextSibling);
        this.input.parentNode.insertBefore(this.datePicker, this.openButton.nextSibling);
        this.input.placeholder = this.getPlaceholderText();
        this.setupEventListeners();
    }

    getPlaceholderText() {
        
        if (['full', 'long', 'medium', 'short'].includes(this.config.dateFormat)) {
            const exampleDate = Temporal.PlainDate.from({ year: 2023, month: 12, day: 31 });
            return exampleDate.toLocaleString(this.locale, {
                dateStyle: this.config.dateFormat,
                calendar: 'gregory',
                timeZone: 'UTC',
            });
        } else {
            return this.config.dateFormat;
        }
    }

    defaultRenderOpenButton() {
        const openButton = document.createElement('button');
        openButton.type = 'button';
        //changed from icon to svg icon, used innerHTML 
        openButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="pointer-events: none;">
        <path d="M12 19C12.1978 19 12.3911 18.9414 12.5556 18.8315C12.72 18.7216 12.8482 18.5654 12.9239 18.3827C12.9996 18.2 13.0194 17.9989 12.9808 17.8049C12.9422 17.6109 12.847 17.4327 12.7071 17.2929C12.5673 17.153 12.3891 17.0578 12.1951 17.0192C12.0011 16.9806 11.8 17.0004 11.6173 17.0761C11.4346 17.1518 11.2784 17.28 11.1685 17.4444C11.0586 17.6089 11 17.8022 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19ZM17 19C17.1978 19 17.3911 18.9414 17.5556 18.8315C17.72 18.7216 17.8482 18.5654 17.9239 18.3827C17.9996 18.2 18.0194 17.9989 17.9808 17.8049C17.9422 17.6109 17.847 17.4327 17.7071 17.2929C17.5673 17.153 17.3891 17.0578 17.1951 17.0192C17.0011 16.9806 16.8 17.0004 16.6173 17.0761C16.4346 17.1518 16.2784 17.28 16.1685 17.4444C16.0586 17.6089 16 17.8022 16 18C16 18.2652 16.1054 18.5196 16.2929 18.7071C16.4804 18.8946 16.7348 19 17 19ZM17 15C17.1978 15 17.3911 14.9414 17.5556 14.8315C17.72 14.7216 17.8482 14.5654 17.9239 14.3827C17.9996 14.2 18.0194 13.9989 17.9808 13.8049C17.9422 13.6109 17.847 13.4327 17.7071 13.2929C17.5673 13.153 17.3891 13.0578 17.1951 13.0192C17.0011 12.9806 16.8 13.0004 16.6173 13.0761C16.4346 13.1518 16.2784 13.28 16.1685 13.4444C16.0586 13.6089 16 13.8022 16 14C16 14.2652 16.1054 14.5196 16.2929 14.7071C16.4804 14.8946 16.7348 15 17 15ZM12 15C12.1978 15 12.3911 14.9414 12.5556 14.8315C12.72 14.7216 12.8482 14.5654 12.9239 14.3827C12.9996 14.2 13.0194 13.9989 12.9808 13.8049C12.9422 13.6109 12.847 13.4327 12.7071 13.2929C12.5673 13.153 12.3891 13.0578 12.1951 13.0192C12.0011 12.9806 11.8 13.0004 11.6173 13.0761C11.4346 13.1518 11.2784 13.28 11.1685 13.4444C11.0586 13.6089 11 13.8022 11 14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15ZM19 3H18V2C18 1.73478 17.8946 1.48043 17.7071 1.29289C17.5196 1.10536 17.2652 1 17 1C16.7348 1 16.4804 1.10536 16.2929 1.29289C16.1054 1.48043 16 1.73478 16 2V3H8V2C8 1.73478 7.89464 1.48043 7.70711 1.29289C7.51957 1.10536 7.26522 1 7 1C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V20C2 20.7956 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H19C19.7956 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7956 22 20V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3ZM20 20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V11H20V20ZM20 9H4V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H6V6C6 6.26522 6.10536 6.51957 6.29289 6.70711C6.48043 6.89464 6.73478 7 7 7C7.26522 7 7.51957 6.89464 7.70711 6.70711C7.89464 6.51957 8 6.26522 8 6V5H16V6C16 6.26522 16.1054 6.51957 16.2929 6.70711C16.4804 6.89464 16.7348 7 17 7C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V9ZM7 15C7.19778 15 7.39112 14.9414 7.55557 14.8315C7.72002 14.7216 7.84819 14.5654 7.92388 14.3827C7.99957 14.2 8.01937 13.9989 7.98079 13.8049C7.9422 13.6109 7.84696 13.4327 7.70711 13.2929C7.56725 13.153 7.38907 13.0578 7.19509 13.0192C7.00111 12.9806 6.80004 13.0004 6.61732 13.0761C6.43459 13.1518 6.27841 13.28 6.16853 13.4444C6.05865 13.6089 6 13.8022 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15ZM7 19C7.19778 19 7.39112 18.9414 7.55557 18.8315C7.72002 18.7216 7.84819 18.5654 7.92388 18.3827C7.99957 18.2 8.01937 17.9989 7.98079 17.8049C7.9422 17.6109 7.84696 17.4327 7.70711 17.2929C7.56725 17.153 7.38907 17.0578 7.19509 17.0192C7.00111 16.9806 6.80004 17.0004 6.61732 17.0761C6.43459 17.1518 6.27841 17.28 6.16853 17.4444C6.05865 17.6089 6 17.8022 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19Z" fill="#1A1C1F"/>
        </svg>`;
        openButton.setAttribute('aria-label', localizationObject[this.locale].label);
        openButton.classList.add('datepicker-open-button');
        //added a classname here
        openButton.classList.add('datepicker-button')
        return openButton;
    }

    defaultRenderDatePicker() {
        const datePicker = document.createElement('div');
        datePicker.classList.add(this.config.calendarClasses, 'modal', 'fade');
        datePicker.setAttribute('role', 'dialog');
        datePicker.setAttribute('aria-modal', 'true');
        datePicker.setAttribute('aria-label', this.input.ariaLabel || localizationObject[this.locale].calendar);
        datePicker.setAttribute('tabindex', '-1');
        datePicker.style.display = 'none';
        datePicker.setAttribute('dir', this.getDirAttribute());

        this.templates.renderCalendar(datePicker, this.focusedDate);

        if (this.config.enableTime) {
            const timePicker = this.templates.renderTimePicker();
            datePicker.appendChild(timePicker);
        }

        return datePicker;
    }

    defaultRenderCalendar(container, date) {
        container.innerHTML = '';

        if (this.config.availableCalendars.length > 1) {
            const switchButton = this.createCalendarSwitchButton();
            container.appendChild(switchButton);
        }

        container.appendChild(this.templates.renderHeader(date));

        if (!this.calendarTable) {
            this.calendarTable = this.createCalendarTable(date);
            container.appendChild(this.calendarTable);
        } else {
            this.updateCalendarTable(this.calendarTable, date);
            container.appendChild(this.calendarTable);
        }
    }

    createCalendarSwitchButton() {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('btn', 'btn-secondary', 'mb-2');
        button.style.display = 'block';
        button.style.marginLeft = 'auto'
        const nextCalendar = this.getNextCalendar();
        button.textContent = `${localizationObject[this.locale].switchTo} ${localizationObject[this.locale][nextCalendar].label}`;
        button.addEventListener('click', () => this.toggleCalendar(button));
        button.setAttribute('aria-label', `${localizationObject[this.locale].switchTo} ${localizationObject[this.locale][nextCalendar].label}`);
        return button;
    }

    getNextCalendar() {
        const currentIndex = this.config.availableCalendars.indexOf(this.currentCalendar);
        const nextIndex = (currentIndex + 1) % this.config.availableCalendars.length;
        return this.config.availableCalendars[nextIndex];
    }

    toggleCalendar(button) {
        this.currentCalendar = this.getNextCalendar();
        const nextCalendar = this.getNextCalendar();
        button.textContent = `${localizationObject[this.locale].switchTo} ${localizationObject[this.locale][nextCalendar].label}`;
        button.setAttribute('aria-label', `${localizationObject[this.locale].switchTo} ${localizationObject[this.locale][nextCalendar].label}`);
        this.focusedDate = this.focusedDate.withCalendar(this.currentCalendar);
        this.today = Temporal.Now.plainDate(this.currentCalendar);
        this.updateCalendar(this.datePicker, this.focusedDate, false);
    }

    defaultRenderHeader(date) {
        const header = document.createElement('div');
        header.classList.add('calendar-header', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-2');

        const prevButton = this.createNavButton('previousMonth', 'btn', () => this.navigateCalendar(-1, 'months'));
        const nextButton = this.createNavButton('nextMonth', 'btn', () => this.navigateCalendar(1, 'months'));

        const monthSelect = this.createMonthSelect(date);
        const yearSelect = this.createYearSelect(date);

        const selectsContainer = document.createElement('div');
        selectsContainer.appendChild(monthSelect);
        selectsContainer.appendChild(yearSelect);
        selectsContainer.classList.add('d-flex', 'align-items-center');

        const monthNavContainer = document.createElement('div');
        monthNavContainer.appendChild(prevButton);
        monthNavContainer.appendChild(nextButton)
        header.appendChild(selectsContainer);
        header.appendChild(monthNavContainer);
        monthNavContainer.classList.add('d-flex', 'align-items-center');        
        monthNavContainer.style.gap = '0.3rem'
        // header.appendChild(prevButton);
        // header.appendChild(nextButton);

        return header;
    }

    defaultRenderCell(currentDate, isCurrentMonth) {
        const dateCell = document.createElement('div');
        dateCell.setAttribute('role', 'gridcell');
        dateCell.classList.add(this.config.cellClasses, this.config.dateClasses, 'col');
        dateCell.classList.add(this.config.cellClasses, this.config.dateClasses, 'my-custom-cell-class');

        const dateButton = document.createElement('button');
        dateButton.classList.add('btn', 'btn-link');
        dateButton.textContent = currentDate.day;
        dateButton.setAttribute('aria-label', this.localizeDate(currentDate));
        dateButton.setAttribute('data-date', currentDate.toString());
        dateButton.addEventListener('click', () => this.selectDate(dateButton));

        dateButton.setAttribute('role', 'button');
        dateButton.setAttribute('tabindex', '-1');

        this.highlightDates(dateButton, dateCell, currentDate, isCurrentMonth);

        dateCell.appendChild(dateButton);
        return dateCell;
    }

    defaultRenderTimePicker() {
        if (this.timePicker) return this.timePicker;

        const timePicker = document.createElement('div');
        timePicker.classList.add('time-picker', 'd-flex', 'justify-content-center', 'align-items-center', 'mt-2');

        const hourSelect = this.createTimeSelect(24, 'hours');
        const minuteSelect = this.createTimeSelect(60, 'minutes');

        timePicker.appendChild(hourSelect);
        timePicker.appendChild(document.createTextNode(':'));
        timePicker.appendChild(minuteSelect);

        this.timePicker = timePicker;
        return timePicker;
    }

    createTimeSelect(max, labelKey) {
        const select = document.createElement('select');
        select.classList.add('form-select', 'me-2');
        select.setAttribute('aria-label', localizationObject[this.locale][labelKey]);
        for (let i = 0; i < max; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = i.toString().padStart(2, '0');
            select.appendChild(opt);
        }
        select.addEventListener('change', () => this.updateTime());
        return select;
    }

    updateTime() {
        const hourSelect = this.timePicker.querySelector('select:nth-of-type(1)');
        const minuteSelect = this.timePicker.querySelector('select:nth-of-type(2)');

        this.selectedTime = {
            hour: parseInt(hourSelect.value),
            minute: parseInt(minuteSelect.value),
        };
        this.updateInputValue();
    }

    createNavButton(label, btnClass, onClick) {
        const button = document.createElement('button');
        button.classList.add('btn', btnClass);
        button.textContent = localizationObject[this.locale][label];
        button.addEventListener('click', onClick);
        button.setAttribute('aria-label', localizationObject[this.locale][label]);
        return button;
    }

    createSelect(options, selectedValue, onChange) {
        const select = document.createElement('select');
        select.classList.add('form-select', 'me-2');
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.label;
            if (option.value === selectedValue) opt.selected = true;
            select.appendChild(opt);
        });
        select.addEventListener('change', onChange);
        return select;
    }

    createMonthSelect(date) {
        const options = Array.from({ length: 12 }, (_, i) => ({
            value: i + 1,
            label: localizationObject[this.locale][this.currentCalendar][i + 1],
        }));
        const select = this.createSelect(options, date.month, event => this.updateMonth(parseInt(event.target.value)));
        select.classList.add('month-select');
        return select;
    }

    createYearSelect(date) {
        const options = Array.from({ length: 21 }, (_, i) => ({
            value: date.year - 10 + i,
            label: date.year - 10 + i,
        }));
        const select = this.createSelect(options, date.year, event => this.updateYear(parseInt(event.target.value)));
        select.classList.add('year-select');
        return select;
    }

    updateMonth(newMonth) {
        this.focusedDate = this.focusedDate.with({ month: newMonth });
        this.updateCalendar(this.datePicker, this.focusedDate, false);
    }

    updateYear(newYear) {
        this.focusedDate = this.focusedDate.with({ year: newYear });
        this.updateCalendar(this.datePicker, this.focusedDate, false);
    }

    createCalendarTable(date) {
        const table = document.createElement('div');
        table.classList.add('calendar-table', 'table-responsive', 'table-borderless');
        table.setAttribute('role', 'application');
        table.setAttribute('aria-label', `${localizationObject[this.locale][this.currentCalendar][date.month]} ${date.year}`);
        this.updateCalendarTable(table, date);
        return table;
    }

    updateCalendar(container, date, fullRender = false) {
        if (fullRender) {
            this.templates.renderCalendar(container, date);
        } else {
            this.updateCalendarTable(this.calendarTable, date);
            this.updateMonthSelect(container.querySelector('.month-select'), date);
            this.updateYearSelect(container.querySelector('.year-select'), date);
        }
    }

    updateMonthSelect(monthSelect, date) {
        //reset the month select to the current month
        //it needs to be recreated because the month names might have changed
        const newMonthSelect = this.createMonthSelect(date);
        //get the options from the new select and replace them in the old select
        monthSelect.innerHTML = newMonthSelect.innerHTML;
        monthSelect.value = date.month;
    }

    updateYearSelect(yearSelect, date) {
        //reset the year select to the current year
        //it needs to be recreated because the year values might have changed
        const newYearSelect = this.createYearSelect(date);
        //get the options from the new select and replace them in the old select
        yearSelect.innerHTML = newYearSelect.innerHTML;
        yearSelect.value = date.year
    }

    updateCalendarTable(table, date) {
        table.innerHTML = '';
        const body = this.createCalendarBody(date);
        table.appendChild(body);
        table.setAttribute('aria-label', `${localizationObject[this.locale][this.currentCalendar][date.month]} ${date.year}`);
    }

    createCalendarBody(date) {
        const body = document.createElement('div');
        body.classList.add('calendar-body', 'table', 'table-bordered', 'text-center');
        body.setAttribute('role', 'grid');

        const weekdaysRow = document.createElement('div');
        weekdaysRow.classList.add('row');
        weekdaysRow.setAttribute('role', 'row');
        const weekdays = this.getWeekdaysArray();
        weekdays.forEach(day => {
            const cell = document.createElement('div');
            cell.classList.add('col');
            cell.setAttribute('role', 'columnheader');
            cell.textContent = day.short;
            weekdaysRow.appendChild(cell);
        });
        body.appendChild(weekdaysRow);

        const firstDayOfMonth = Temporal.PlainDate.from({
            year: date.year,
            month: date.month,
            day: 1,
            calendar: this.currentCalendar,
        });
        const daysInMonth = firstDayOfMonth.daysInMonth;
        const startDayOfWeek = (firstDayOfMonth.dayOfWeek - this.config.weekStartsOn + 7) % 7;

        this.appendDateCells(body, date, daysInMonth, startDayOfWeek);

        return body;
    }

    getWeekdaysArray() {
        const weekdays = [];
        const startDay = this.config.weekStartsOn;
        for (let i = 0; i < 7; i++) {
            const dayNumber = ((startDay + i - 1) % 7) + 1;
            weekdays.push(localizationObject[this.locale].weekdays[dayNumber]);
        }
        return weekdays;
    }

    appendDateCells(container, date, daysInMonth, startDayOfWeek) {
        let row = document.createElement('div');
        row.classList.add(this.config.rowClasses, 'row');
        row.setAttribute('role', 'row');

        for (let i = 0; i < startDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add(this.config.cellClasses, 'col', 'empty-cell');
            emptyCell.setAttribute('role', 'gridcell');
            row.appendChild(emptyCell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const currentDate = Temporal.PlainDate.from({
                year: date.year,
                month: date.month,
                day,
                calendar: this.currentCalendar,
            });

            if ((startDayOfWeek + day - 1) % 7 === 0 && day !== 1) {
                container.appendChild(row);
                row = document.createElement('div');
                row.classList.add(this.config.rowClasses, 'row');
                row.setAttribute('role', 'row');
            }

            const dateCell = this.templates.renderCell(currentDate, true);
            row.appendChild(dateCell);
        }

        const totalCells = startDayOfWeek + daysInMonth;
        const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
        for (let i = 0; i < remainingCells; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add(this.config.cellClasses, 'col', 'empty-cell');
            emptyCell.setAttribute('role', 'gridcell');
            row.appendChild(emptyCell);
        }

        container.appendChild(row);
    }

    navigateCalendar(value, unit) {
        this.focusedDate = this.focusedDate.add({ [unit]: value });
        this.updateCalendar(this.datePicker, this.focusedDate, false);
    }

    selectDate(button) {
        const selectedDateStr = button.getAttribute('data-date');
        const selectedDate = Temporal.PlainDate.from(selectedDateStr).withCalendar('gregory');

        if (this.config.enableMultipleDates || this.config.enableRange) {
            this.handleMultipleDateSelection(selectedDate);
        } else {
            this.selectedDates = [selectedDate];
            if (!this.config.enableTime) {
                this.hideDatePicker();
            }
        }

        this.updateInputValue();
        this.updateCalendar(this.datePicker, this.focusedDate, false);
    }

    handleMultipleDateSelection(selectedDate) {
        const dateIndex = this.selectedDates.findIndex(date => date.equals(selectedDate));
        if (dateIndex >= 0) {
            this.selectedDates.splice(dateIndex, 1);
        } else {
            if (this.config.enableRange && this.selectedDates.length === 1) {
                this.selectedDates.push(selectedDate);
                this.selectedDates.sort((a, b) => Temporal.PlainDate.compare(a, b));
                if (!this.config.enableTime) {
                    this.hideDatePicker();
                }
            } else {
                this.selectedDates = [selectedDate];
            }
        }
    }

    updateInputValue() {
        let formattedDates = '';

        if (this.config.enableRange && this.selectedDates.length === 2) {
            formattedDates = `${this.formatDate(this.selectedDates[0])} - ${this.formatDate(this.selectedDates[1])}`;
        } else if (this.config.enableMultipleDates) {
            formattedDates = this.selectedDates.map(date => this.formatDate(date)).join(', ');
        } else if (this.selectedDates.length === 1) {
            formattedDates = this.formatDate(this.selectedDates[0]);
        }

        if (this.config.enableTime && this.selectedTime) {
            const timeString = Temporal.PlainTime.from({
                hour: this.selectedTime.hour,
                minute: this.selectedTime.minute,
            }).toLocaleString(this.locale, { hour: 'numeric', minute: 'numeric' });
            formattedDates += ` ${timeString}`;
        }

        this.input.value = formattedDates;
    }

    formatDate(date) {
        if (['full', 'long', 'medium', 'short'].includes(this.config.dateFormat)) {
            return date.toLocaleString(this.locale, {
                dateStyle: this.config.dateFormat,
                calendar: 'gregory',
                timeZone: 'UTC',
            });
        } else {
            return this.customFormatDate(date, this.config.dateFormat);
        }
    }

    customFormatDate(date, formatString) {
        const tokens = {
            'YYYY': date.year.toString().padStart(4, '0'),
            'YY': date.year.toString().slice(-2).padStart(2, '0'),
            'MM': date.month.toString().padStart(2, '0'),
            'M': date.month.toString(),
            'DD': date.day.toString().padStart(2, '0'),
            'D': date.day.toString(),
        };
        

        let formattedDate = formatString;
        for (const [token, value] of Object.entries(tokens)) {
            formattedDate = formattedDate.replace(new RegExp(token, 'g'), value);
        }

        return formattedDate;
    }

    setupEventListeners() {
        this.openButton.addEventListener('click', () => this.showDatePicker());

        this.input.addEventListener('input', () => this.handleManualInput());

        this.datePicker.addEventListener('keydown', e => this.handleKeyboardNavigation(e));
    }

    documentClickHandler(event) {
        if (!this.datePicker.contains(event.target) && event.target !== this.openButton && event.target !== this.input) {
            this.hideDatePicker();
        }
    }

    handleManualInput(event) {
        const inputValue = this.input.value;

        // Get caret position
        const caretPosition = this.input.selectionStart;

        // Get expected format and separator positions
        const { separatorPositions, separators } = this.getSeparatorPositions(this.config.dateFormat);

        // Insert separators automatically
        if (separatorPositions.includes(caretPosition - 1)) {
            const separatorIndex = separatorPositions.indexOf(caretPosition - 1);
            const expectedSeparator = separators[separatorIndex];
            if (inputValue[caretPosition - 1] !== expectedSeparator) {
                // Insert the expected separator
                this.input.value = inputValue.slice(0, caretPosition - 1) + expectedSeparator + inputValue.slice(caretPosition - 1);
                // Move caret forward
                this.input.selectionStart = this.input.selectionEnd = caretPosition + 1;
            }
        }

        // Parse the date from the input
        const parsedDate = this.parseInputDate(this.input.value);

        if (parsedDate) {
            // Valid date parsed
            this.selectedDates = [parsedDate];
            this.focusedDate = parsedDate.withCalendar(this.currentCalendar);
        }
    }
    // Returns positions of separators in the format string
    getSeparatorPositions(formatString) {
        const tokens = ['yyyy', 'yy', 'MM', 'M', 'dd', 'd'];
        const separators = [];
        const separatorPositions = [];
        let position = 0;
        let inToken = false;

        for (let i = 0; i < formatString.length; i++) {
            let char = formatString[i];

            // Check if current position is a token
            let isTokenChar = false;
            for (let token of tokens) {
                if (formatString.substr(i, token.length) === token) {
                    i += token.length - 1;
                    position += token.length;
                    isTokenChar = true;
                    inToken = true;
                    break;
                }
            }

            if (!isTokenChar) {
                // It's a separator
                if (inToken) {
                    separatorPositions.push(position);
                    separators.push(char);
                }
                position++;
                inToken = false;
            }
        }

        return { separatorPositions, separators };
    }


    parseInputDate(inputValue) {
        const formatString = this.config.dateFormat;
        const tokens = [];
        const regexParts = [];
const tokenPatterns = {
    'YYYY': '(\\d{4})',
    'YY': '(\\d{2})',
    'MM': '(\\d{2})',
    'M': '(\\d{1,2})',
    'DD': '(\\d{2})',
    'D': '(\\d{1,2})',
};


        let regexString = '';
        let position = 0;

        while (position < formatString.length) {
            let matched = false;
            for (let [token, pattern] of Object.entries(tokenPatterns)) {
                if (formatString.substr(position, token.length) === token) {
                    tokens.push(token);
                    regexParts.push(pattern);
                    position += token.length;
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                // Non-token character (separator)
                regexParts.push(`\\${formatString[position]}`);
                position++;
            }
        }

        const regex = new RegExp(`^${regexParts.join('')}$`);
        const matches = inputValue.match(regex);

        if (matches) {
            const dateParts = {};
            tokens.forEach((token, index) => {
                dateParts[token] = matches[index + 1];
            });

            const year = dateParts['yyyy'] || ('20' + dateParts['yy']);
            const month = dateParts['MM'] || dateParts['M'];
            const day = dateParts['dd'] || dateParts['d'];

            try {
                return Temporal.PlainDate.from({
                    year: parseInt(year),
                    month: parseInt(month),
                    day: parseInt(day),
                });
            } catch (e) {
                // Invalid date
                return null;
            }
        }
        return null;
    }

    showDatePicker() {
        this.datePicker.style.display = 'block';
        this.datePicker.classList.add('show');

        if (this.selectedDates.length > 0) {
            this.focusedDate = this.selectedDates[0].withCalendar(this.currentCalendar);
        } else {
            const inputValue = this.input.value.trim();
            const parsedDate = this.parseInputDate(inputValue);
            if (parsedDate) {
                this.selectedDates = [parsedDate];
                this.focusedDate = parsedDate.withCalendar(this.currentCalendar);
            } else {
                this.focusedDate = this.today;
            }
        }

        this.today = Temporal.Now.plainDate(this.currentCalendar);

        this.updateCalendar(this.datePicker, this.focusedDate, true);
        this.focusNewDate(this.datePicker, this.focusedDate);

        document.addEventListener('click', this.documentClickHandler.bind(this));
    }

    hideDatePicker() {
        this.datePicker.style.display = 'none';
        this.datePicker.classList.remove('show');
        document.removeEventListener('click', this.documentClickHandler);
    }

    handleKeyboardNavigation(event) {
        if (event.key === 'Tab') {
            this.trapFocus(event);
            return;
        } else if (event.key === 'Escape') {
            this.hideDatePicker();
            this.openButton.focus();
            return;
        }

        if (!this.datePicker.querySelector('.calendar-table').contains(event.target)) return;

        if (event.ctrlKey && event.key === 'Home') {
            event.preventDefault();
            this.focusedDate = this.today;
            this.updateCalendar(this.datePicker, this.focusedDate, false);
            this.focusNewDate(this.datePicker, this.focusedDate);
        } else if (event.ctrlKey && event.key === 'End') {
            event.preventDefault();
            const switchButton = this.datePicker.querySelector('.btn.btn-secondary.mb-2');
            if (switchButton) {
                this.toggleCalendar(switchButton);
                this.focusNewDate(this.datePicker, this.focusedDate);
            }
        } else {
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    this.navigateWithKeyboard(event);
                    event.preventDefault();
                    break;
                case 'Home':
                    event.preventDefault();
                    this.focusedDate = this.focusedDate.with({ day: 1 });
                    this.focusNewDate(this.datePicker, this.focusedDate);
                    break;
                case 'End':
                    event.preventDefault();
                    this.focusedDate = this.focusedDate.with({ day: this.focusedDate.daysInMonth });
                    this.focusNewDate(this.datePicker, this.focusedDate);
                    break;
                case 'PageUp':
                    event.preventDefault();
                    if (event.shiftKey) {
                        this.focusedDate = this.focusedDate.subtract({ years: 1 });
                    } else {
                        this.focusedDate = this.focusedDate.subtract({ months: 1 });
                    }
                    this.updateCalendar(this.datePicker, this.focusedDate, false);
                    this.focusNewDate(this.datePicker, this.focusedDate);
                    break;
                case 'PageDown':
                    event.preventDefault();
                    if (event.shiftKey) {
                        this.focusedDate = this.focusedDate.add({ years: 1 });
                    } else {
                        this.focusedDate = this.focusedDate.add({ months: 1 });
                    }
                    this.updateCalendar(this.datePicker, this.focusedDate, false);
                    this.focusNewDate(this.datePicker, this.focusedDate);
                    break;
                default:
                    break;
            }
        }
    }

    navigateWithKeyboard(event) {
        const navigationMap = {
            'ArrowUp': { days: -7 },
            'ArrowDown': { days: 7 },
            'ArrowLeft': { days: -1 },
            'ArrowRight': { days: 1 },
        };

        const action = navigationMap[event.key];
        if (action) {
            this.focusedDate = this.focusedDate.add(action);
            this.updateCalendar(this.datePicker, this.focusedDate, false);
            this.focusNewDate(this.datePicker, this.focusedDate);
        }
    }

    focusNewDate(container, date) {
        const buttons = container.querySelectorAll('.calendar-table button');
        buttons.forEach(button => {
            const buttonDate = Temporal.PlainDate.from(button.getAttribute('data-date'));
            if (buttonDate.equals(date)) {
                button.focus();
            }
        });
    }

    highlightDates(button, cell, currentDate, isCurrentMonth) {
        const gregorianDate = currentDate.withCalendar('gregory');

        if (currentDate.equals(this.focusedDate)) {
            button.classList.add(this.config.focusedClass);
            button.setAttribute('tabindex', '0');
            button.setAttribute('aria-selected', 'true');
        } else {
            button.setAttribute('tabindex', '-1');
            button.setAttribute('aria-selected', 'false');
        }

        if (currentDate.equals(this.today)) {
            cell.classList.add(this.config.todayClass);
            button.setAttribute('aria-label', `${localizationObject[this.locale].today}, ${button.getAttribute('aria-label')}`);
        }

        if (
            (this.config.minDate && gregorianDate < this.config.minDate) ||
            (this.config.maxDate && gregorianDate > this.config.maxDate)
        ) {
            button.setAttribute('aria-disabled', 'true');
            button.disabled = true;
        }

        const isSelected = this.selectedDates.some(date => date.equals(gregorianDate));
        if (isSelected) {
            button.classList.add(this.config.selectedClass);
        }
    }

    localizeDate(date) {
        const year = date.year;
        const month = localizationObject[this.locale][this.currentCalendar][date.month];
        const day = date.day;
        const weekday = localizationObject[this.locale].weekdays[date.dayOfWeek].long;
        return `${weekday}, ${day} ${month} ${year}`;
    }

    getDirAttribute() {
        return this.locale === 'ar' ? 'rtl' : 'ltr';
    }

    trapFocus(event) {
        if (event.key !== 'Tab') return;

        const focusableElements = this.datePicker.querySelectorAll(
            'button:not([disabled]):not([tabindex="-1"]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const focusArray = Array.prototype.slice.call(focusableElements);
        const firstFocusable = focusArray[0];
        const lastFocusable = focusArray[focusArray.length - 1];

        if (event.shiftKey) {
            if (document.activeElement === firstFocusable) {
                event.preventDefault();
                lastFocusable.focus();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                event.preventDefault();
                firstFocusable.focus();
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AccessibleDatePicker({
        dateFormat: 'DD/MM/YYYY',
        //calendar: 'islamic-umalqura',
        locale: 'en',
    });
});
