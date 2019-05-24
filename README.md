# Bowling-App

Brief:  Scoring System for bowling Club with a Single Player.

Technologies Used : TypeScript , HTML ,Jasmine for Testcases.
                    Followed TDD approach and covered below testcases before implementation.
                    
UseCases :


           1. If in 2 tries, the bowler fails to knock down all the pins, their score is the sum of the number of pins they've knocked down               in the 2 attempts
           2. If in 2 tries, the bowler knocks down all the pins, it is a spare. The scoring of a spare is the sum of the number of pins                 knocked down plus the number of pins knocked down in the next bowl.
           3. If in one try, the bowler knocks down all the pins, it is a strike. The scoring of a strike is the sum of the number of                     pins knocked down plus the number of pins knocked down in the next two bowls.
           
           
           
TestSuite Scenarios :

    'bowler fails to knock down all the pins'    
    'the bowler knocks down all the pins, in 2 tries - spare'
    'the bowler knocks down all the pins, in one try - Strike'     
    'check if there has been'    
        it('a strike')
        it('if its  spare')
        it('when in 2 tries not able to knock down all pins')
        

SetUp : Run score.html

