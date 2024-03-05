package jpaProject.jpashop.service;

import jpaProject.jpashop.controller.ProfileForm;
import jpaProject.jpashop.domain.Address;
import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.repository.MemberRepository;
import jpaProject.jpashop.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public MemberService(MemberRepository memberRepository, UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {

        this.memberRepository = memberRepository;
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    /**
     회원가입
     */
    @Transactional(readOnly = false)
    public Long join(Member member){
        validateDuplicateMember(member);

        member.setUsername(member.getUsername());
        member.setPassword(bCryptPasswordEncoder.encode(member.getPassword()));
        /*
        member.setRole("ROLE_ADMIN");
        // 운영자
        * */
        member.setRole("ROLE_CUSTOMER");


        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member){
        List<Member> members = memberRepository.validName(member.getUsername());
        if(!members.isEmpty()){
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    /**
     * 회원가입 유효성 검사
     */
    public boolean existByUsername(String username){
        List<Member> members = memberRepository.validName(username);
        if(!members.isEmpty()){
            return false;
        }
        return true;
    }

    /**
     * 회원정보 수정
     */

    @Transactional
    public void updateProfile(ProfileForm profileForm){
       Member findMember =  userRepository.findByUsername(profileForm.getUsername());

       Address address = new Address(profileForm.getCity(),profileForm.getStreet(),profileForm.getZipcode());

       findMember.setEmail(profileForm.getEmail());
       findMember.setAddress(address);

        // 개인 정보 업데이트
//        memberRepository.updateProfile(findMember);

    }
    /**
     * 회원 전체 조회
     */
    public List<Member> findMembers(){ return memberRepository.findAll(); }

    public Member findOne(Long memberId){
        return memberRepository.findOne(memberId);
    }

}
