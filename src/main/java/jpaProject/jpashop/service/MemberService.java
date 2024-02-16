package jpaProject.jpashop.service;

import jpaProject.jpashop.domain.Member;
import jpaProject.jpashop.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {

        this.memberRepository = memberRepository;
    }

    /**
     회원가입
     */
    @Transactional(readOnly = false)
    public Long join(Member member){
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member){
        List<Member> findMembers = memberRepository.findByName(member.getName());
        if(!findMembers.isEmpty()){
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    /**
     * 회원 전체 조회
     */
    public List<Member> findMembers(){ return memberRepository.findAll(); }

    public Member findOne(Long memberId){
        return memberRepository.findOne(memberId);
    }

    /**
    * 로그인시 JWT 토큰 검증
    * */

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //DB에서 조회
        List<Member> userData =  memberRepository.findByName(username);
        Member user = (Member) userData;
        System.out.println("userData" + user);
        if (userData != null) {
            //member에  담아서 return하면 AutneticationManager가 검증 
            return new CustomUserDetails(user);
        }
        return null;
    }

}
