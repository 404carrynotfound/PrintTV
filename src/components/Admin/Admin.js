import AdminHeader from "./AdminHeader.js";
import ChannelsTable from "./Table.js";
import SupportTickets from "./SupportTickets.js";

import { useLocation } from 'react-router-dom';

export default function Admin() {
    const location = useLocation();
    return (
        <>
            <AdminHeader />
            {
                location.pathname === "/admin/channels"
                    ? <ChannelsTable />
                    : <SupportTickets />
            }
        </>
    )
}