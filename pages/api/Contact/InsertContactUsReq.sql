INSERT INTO
    TblContactUS (
        UserName,
        PhoneNumber,
        Email,
        MsgSubject,
        Msg,   
        CreatedDate
    )
VALUES
    (
        @UserName,
        @PhoneNumber,
        @Email,
        @MsgSubject,
        @Msg,
        GETDATE()
    )
SELECT
    SCOPE_IDENTITY() AS reqId 