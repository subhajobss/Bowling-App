  
describe('ScoreBoard', function(){

  var frame;
   beforeEach(function(){
    frame = new ScoreBoard();
  });

  describe('returns the overallscore when the', function(){
    
    it('bowler fails to knock down all the pins', function(){
      frame.roll(0,11); // To generate random number - assume 5
      expect(frame.roll1Score).toEqual(5);
      frame = new ScoreBoard();
      frame.roll(0,11); // To generate random number - assume 4
      expect(frame.roll2Score).toEqual(4);
      expect(frame.overallScore).toEqual(9);
    });

    it('the bowler knocks down all the pins, in 2 tries - spare', function(){
        frame.roll(0,11); // To generate random number - assume 7
        expect(frame.roll1Score).toEqual(7);
        frame = new ScoreBoard();
        frame.roll(0,11); // To generate random number - assume 3
        expect(frame.roll2Score).toEqual(3);
        frame.roll(0,11); // To generate random number - assume 3
        expect(frame.roll3Score).toEqual(3);
        expect(frame.spare).toBe(true);
        expect(frame.overallScore).toEqual(16);
      });
  
      it('the bowler knocks down all the pins, in one try - Strike', function(){
        frame.roll(0,11); // To generate random number - assume 10
        expect(frame.roll1Score).toEqual(10);
        frame = new ScoreBoard();
        frame.roll(0,11); // To generate random number - assume 3
        expect(frame.roll2Score).toEqual(3);
        frame.roll(0,11); // To generate random number - assume 3
        expect(frame.roll3Score).toEqual(3);
        expect(frame.strike).toBe(true);
        expect(frame.overallScore).toEqual(22);
      });
  
   
  });

 
  describe('check if there has been', function(){
    
    it('a strike', function(){
      expect(frame.strike).toEqual(false);
      frame.roll(0,11); // To generate random number - assume 10
      expect(frame.strike).toEqual(true);
    });

    it('if its  spare', function(){
      expect(frame.spare).toEqual(false);
      frame.roll(0,11); // To generate random number - assume 5
      expect(frame.spare).toEqual(false);
      frame.roll(0,11); // To generate random number - assume 5
      expect(frame.spare).toEqual(true);
    });

    it('when in 2 tries not able to knock down all pins', function(){
        frame.roll(0,11); // To generate random number - assume 3
        frame.roll(0,11); // To generate random number - assume 4
      expect(frame.strike).toEqual(false);
      expect(frame.spare).toEqual(false);
    });
  });

});