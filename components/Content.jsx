import{ FaMoneyBillAlt, FaRegHandshake, FaCoins, FaUserCog, FaScroll } from 'react-icons/fa';
import { FiUsers, FiUserCheck, FiUserX } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { GiReceiveMoney, GiSuitcase, GiSettingsKnobs, GiNotebook } from 'react-icons/gi';
import { GrServices } from 'react-icons/gr';
import { MdOutlineSavings } from 'react-icons/md';
import { AiOutlineBank, AiOutlineBarChart, AiOutlineTags } from 'react-icons/ai';
import { BiTransfer } from 'react-icons/bi';


export const firstMenuSections = [
    {icons: < FiUsers fontSize={22} color='darkGray'/>, title: 'Users' },
    {icons: < HiOutlineUserGroup fontSize={22} color='darkGray'/>, title: 'Guarantors' },
    {icons: < FaMoneyBillAlt fontSize={22} color='darkGray'/>, title: 'Loans' },
    {icons: < FaRegHandshake fontSize={22} color='darkGray'/>, title: 'Decision Models' },
    {icons: < MdOutlineSavings fontSize={22} color='darkGray'/>, title: 'Savings' },
    {icons: < GiReceiveMoney fontSize={22} color='darkGray'/>, title: 'Loan Requests' },
    {icons: < FiUserCheck fontSize={22} color='darkGray'/>, title: 'Whitelist' },
    {icons: < FiUserX fontSize={22} color='darkGray'/>, title: 'Karma' }
]

export const secondMenuSections = [
    {icons: < GiSuitcase fontSize={22} color='darkGray'/>, title: 'Organization' },
    {icons: < GiReceiveMoney fontSize={22} color='darkGray'/>, title: 'Loan Products' },
    {icons: < AiOutlineBank fontSize={22} color='darkGray'/>, title: 'Savings Products' },
    {icons: < FaCoins fontSize={22} color='darkGray'/>, title: 'Fees and Charges' },
    {icons: < BiTransfer fontSize={22} color='darkGray'/>, title: 'Transactions' },
    {icons: < GrServices fontSize={22} color='darkGray'/>, title: 'Services' },
    {icons: < FaUserCog fontSize={22} color='darkGray'/>, title: 'Services Account' },
    {icons: < FaScroll fontSize={22} color='darkGray'/>, title: 'Settlements' },
    {icons: < AiOutlineBarChart fontSize={22} color='darkGray'/>, title: 'Reports' }
]

export const thirdMenuSections = [
    {icons: < GiSettingsKnobs fontSize={22} color='darkGray'/>, title: 'Preferences' },
    {icons: < AiOutlineTags fontSize={22} color='darkGray'/>, title: 'Fees and Pricing' },
    {icons: < GiNotebook fontSize={22} color='darkGray'/>, title: 'Audit logs' }
]