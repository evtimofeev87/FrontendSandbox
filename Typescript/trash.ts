type Pagination = {
    page: number,
    rowsPerPage: number,
    rowsNumber: number
}

type Invitation = {
    buildingName: string
    createTime: string,
    updateTime: string
    creatorId: number
    creatorLogin: string
    invitationEmail: string
    invitationId: number
    invitationName: string
    invitationStatus: string
    orderId: number
    performanceId: number
    performanceTime: string
    showName: string
    ticketCount: number
}

type InvitationsResponse = {
    pagination: Pagination,
    invitations: Array<Invitation>
}