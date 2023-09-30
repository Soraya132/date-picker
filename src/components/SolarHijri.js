import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import InputIcon from "react-multi-date-picker/components/input_icon"
import transition from "react-element-popper/animations/transition"
import { useState } from "react"

export default function SolarHijri() {
    const [value, setValue] = useState()
    const months = ['حمل',
        'ثور',
        'جوزا',
        'سرطان',
        'اسد',
        'سنبله',
        'میزان',
        'عقرب',
        'قوس',
        'جدی',
        'دلو',
        'حوت',]
    return (

        <div className="flex bg-gray">
            <h1>Solar Hijri DatePicker</h1>
            <DatePicker
                calendar={persian}
                locale={persian_fa}
                months={months}
                render={<InputIcon />}
                animations={[transition()]}
                value={value}
                onChange={setValue}
            />
        </div>
    )
}