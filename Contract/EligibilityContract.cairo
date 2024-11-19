%lang starknet

@view
func is_eligible{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    user: felt
) -> (eligible: felt):
    # Check if the user is eligible
    let (eligible) = eligible_status.read(user)
    return (eligible=eligible)
end

@external
func set_eligibility{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    user: felt, eligible: felt
):
    # Set eligibility for a user
    eligible_status.write(user, eligible)
    return ()
end

@external
func claim_airdrop{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    user: felt
):
    # Ensure the user is eligible
    let (eligible) = eligible_status.read(user)
    assert eligible = 1

    # Add logic to transfer tokens here
    # Example: transfer(user, amount)

    # Mark user as claimed
    eligible_status.write(user, 0)

    return ()
end

# Storage variables
@storage_var
func eligible_status(user: felt) -> (eligible: felt):
end
