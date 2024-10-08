%lang starknet

@storage_var
func eligible_users(address: felt) -> felt:
end

@view
func is_eligible(address: felt) -> (eligible: felt):
    let (eligible) = eligible_users.read(address)
    return (eligible,)
end

@external
func add_eligible_user(address: felt):
    eligible_users.write(address, 1)
    return ()
end

@external
func claim_airdrop():
    let (eligible) = eligible_users.read(caller_address)
    assert eligible == 1, 'Not eligible'
    
    # Logic for sending tokens to the caller_address (this is a placeholder)
    # In a real application, you'd include token transfer logic here.
    return ()
end
